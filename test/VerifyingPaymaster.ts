/* eslint-disable @typescript-eslint/camelcase */
import { Wallet } from 'ethers';
import { ethers } from 'hardhat';
import { expect } from 'chai';
import {
  EtherspotAccount,
  EntryPoint,
  VerifyingPaymaster,
  VerifyingPaymaster__factory,
} from '../typechain-types';
import {
  createAccount,
  createAccountOwner,
  createAddress,
  deployEntryPoint,
  simulationResultCatch,
} from './helpers/testUtils';
import { fillAndSign } from './UserOp';
import { arrayify, hexConcat, parseEther, hexlify } from 'ethers/lib/utils';
import { UserOperation } from './UserOperation';

describe('EntryPoint with VerifyingPaymaster', function () {
  let entryPoint: EntryPoint;
  let accountOwner: Wallet;
  const ethersSigner = ethers.provider.getSigner();
  let account: EtherspotAccount;
  let offchainSigner: Wallet;

  let paymaster: VerifyingPaymaster;
  before(async function () {
    this.timeout(20000);
    entryPoint = await deployEntryPoint();

    offchainSigner = createAccountOwner();
    accountOwner = createAccountOwner();

    paymaster = await new VerifyingPaymaster__factory(ethersSigner).deploy(
      entryPoint.address,
      offchainSigner.address
    );
    await paymaster.addStake(1, { value: parseEther('2') });
    await entryPoint.depositTo(paymaster.address, { value: parseEther('1') });
    ({ proxy: account } = await createAccount(
      ethersSigner,
      accountOwner.address,
      entryPoint.address
    ));
  });

  describe('#validatePaymasterUserOp', () => {
    it('should reject on no signature', async () => {
      const userOp = await fillAndSign(
        {
          sender: account.address,
          paymasterAndData: hexConcat([paymaster.address, '0x1234']),
        },
        accountOwner,
        entryPoint
      );
      let result = '0x';
      console.log('Paymaster addr:', paymaster.address);
      const a = hexConcat([paymaster.address]);
      result += hexlify(paymaster.address).substring(2);
      console.log('Paymaster addr hexed:', a);
      console.log('result so far:', result);
      const b = hexConcat(['0x1234']);
      result += hexlify('0x1234').substring(2);
      console.log('result so far:', result);
      console.log('0x1234 hexed:', b);
      console.log(
        'VerifyingPaymster test - paymasterAndData:',
        userOp.paymasterAndData
      );

      await expect(
        entryPoint.callStatic.simulateValidation(userOp)
      ).to.be.revertedWith('invalid signature length in paymasterAndData');
    });

    it('should reject on invalid signature', async () => {
      const userOp = await fillAndSign(
        {
          sender: account.address,
          paymasterAndData: hexConcat([
            paymaster.address,
            '0x' + '00'.repeat(65),
          ]),
        },
        accountOwner,
        entryPoint
      );
      await expect(
        entryPoint.callStatic.simulateValidation(userOp)
      ).to.be.revertedWith('ECDSA: invalid signature');
    });

    describe('with wrong signature', () => {
      let wrongSigUserOp: UserOperation;
      const beneficiaryAddress = createAddress();
      before(async () => {
        const sig = await offchainSigner.signMessage(arrayify('0xdead'));
        wrongSigUserOp = await fillAndSign(
          {
            sender: account.address,
            paymasterAndData: hexConcat([paymaster.address, sig]),
          },
          accountOwner,
          entryPoint
        );
      });

      it('should return signature error (no revert) on wrong signer signature', async () => {
        const ret = await entryPoint.callStatic
          .simulateValidation(wrongSigUserOp)
          .catch(simulationResultCatch);
        expect(ret.returnInfo.sigFailed).to.be.true;
      });

      it('handleOp revert on signature failure in handleOps', async () => {
        await expect(
          entryPoint.estimateGas.handleOps([wrongSigUserOp], beneficiaryAddress)
        ).to.revertedWith('AA34 signature error');
      });
    });

    it('succeed with valid signature', async () => {
      const userOp1 = await fillAndSign(
        {
          sender: account.address,
        },
        accountOwner,
        entryPoint
      );
      const hash = await paymaster.getHash(userOp1);
      const sig = await offchainSigner.signMessage(arrayify(hash));
      const userOp = await fillAndSign(
        {
          ...userOp1,
          paymasterAndData: hexConcat([paymaster.address, sig]),
        },
        accountOwner,
        entryPoint
      );
      await entryPoint.callStatic.simulateValidation(userOp).catch((e) => {
        console.log(e);
        return simulationResultCatch(e);
      });
    });
  });
});
