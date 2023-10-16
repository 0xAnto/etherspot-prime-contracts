import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployEtherspotWalletFactoryAndImplementation: DeployFunction =
  async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy, deterministic, execute, read } = deployments;
    const { from } = await getNamedAccounts();
    // const ENTRYPOINT = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
    const ENTRYPOINT = "0xc3fB7e4F8D2cff775b1b1709090dd134db4C3806"; // homeverseTestnet
    const EXPECTED_WALLET_FACTORY_ADDRESS =
      "0x7f6d8F107fE8551160BD5351d5F1514A6aD5d40E";
    // const EXPECTED_WALLET_FACTORY_ADDRESS =
    //   "0xeCa7f167A68507f55515f875cBaEA56AA82CE755"; // homeverseTestnet

    console.log("starting deployment of wallet factory and implementation...");
    console.log("starting wallet factory...");

    const determined = await deterministic("EtherspotWalletFactory", {
      from,
      args: [from],
      log: true,
    });
    console.log("determined.address", determined.address);
    // if (determined.address !== EXPECTED_WALLET_FACTORY_ADDRESS) {
    //   console.log("Pre-detemined address is different to what is expected!");
    // } else {
    const ewf = await deploy("EtherspotWalletFactory", {
      from,
      args: [from],
      // gasLimit: 6e6,
      gasPrice: "150000000", // homeverseTestnet
      // gasLimit: 1000000000, // arbitrum
      // gasLimit: 9000000, // baseGoerli
      log: true,
      deterministicDeployment: false,
    });
    console.log(
      `EtherspotWalletFactory deployed at: ${ewf.address} using ${ewf.receipt?.gasUsed}`
    );

    console.log("deploying determinitic wallet implementation...");

    const impl = await deploy("EtherspotWallet", {
      from,
      args: [ENTRYPOINT, ewf.address],
      log: true,
      deterministicDeployment: false,
      gasPrice: "150000000",
    });
    console.log("Implementation deployed at:", impl.address);

    console.log("setting implementation in wallet factory...");

    await execute(
      "EtherspotWalletFactory",
      { from, log: true },
      "setImplementation",
      impl.address
    );

    console.log(
      `check implementation matches: ${await read(
        "EtherspotWalletFactory",
        "accountImplementation"
      )} == ${impl.address}`
    );
    console.log(`Done!`);
    // }
  };

deployEtherspotWalletFactoryAndImplementation.tags = [
  "aa-4337",
  "etherspot-wallet-factory-and-implementation",
  "required",
];

export default deployEtherspotWalletFactoryAndImplementation;
