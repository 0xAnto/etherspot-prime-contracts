/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Whitelist, WhitelistInterface } from "../../src/Whitelist";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "paymaster",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "AddedBatchToWhitelist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "paymaster",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AddedToWhitelist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "paymaster",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
    ],
    name: "RemovedBatchFromWhitelist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "paymaster",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "RemovedFromWhitelist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "version",
        type: "string",
      },
    ],
    name: "WhitelistInitialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_accounts",
        type: "address[]",
      },
    ],
    name: "addBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sponsor",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "check",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_accounts",
        type: "address[]",
      },
    ],
    name: "removeBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610fb98061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063715018a611610066578063715018a6146101085780638da5cb5b14610112578063b092145e14610130578063b3154db014610160578063f2fde38b1461019057610093565b80630a3b0a4f1461009857806324efa264146100b457806329092d0e146100d05780636b845bfe146100ec575b600080fd5b6100b260048036038101906100ad91906109de565b6101ac565b005b6100ce60048036038101906100c99190610a70565b6101b8565b005b6100ea60048036038101906100e591906109de565b610221565b005b61010660048036038101906101019190610a70565b61022d565b005b610110610296565b005b61011a6102aa565b6040516101279190610acc565b60405180910390f35b61014a60048036038101906101459190610ae7565b6102d3565b6040516101579190610b42565b60405180910390f35b61017a60048036038101906101759190610ae7565b610302565b6040516101879190610b42565b60405180910390f35b6101aa60048036038101906101a591906109de565b610316565b005b6101b58161039a565b50565b6101c28282610545565b81816040516101d2929190610c1a565b60405180910390203373ffffffffffffffffffffffffffffffffffffffff167f6eabb183ad4385932735ae89018089a008c58e814451b618bc0dd0e7922f6d1360405160405180910390a35050565b61022a81610599565b50565b6102378282610744565b8181604051610247929190610c1a565b60405180910390203373ffffffffffffffffffffffffffffffffffffffff167f75dcdde27b71b9c529ae8b02072e1eeda244662d2d9c2effea5a1afb8fc913f360405160405180910390a35050565b61029e610798565b6102a86000610816565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60016020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b600061030e83836108da565b905092915050565b61031e610798565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561038e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038590610cb6565b60405180910390fd5b61039781610816565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561040a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040190610d22565b60405180910390fd5b61041433826108da565b15610454576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044b90610db4565b60405180910390fd5b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f0c4b48e75a1f7ab0a9a2f786b5d6c1f7789020403bff177fb54d46edb89ccc0060405160405180910390a350565b60005b828290508110156105945761058383838381811061056957610568610dd4565b5b905060200201602081019061057e91906109de565b61039a565b8061058d90610e3c565b9050610548565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610609576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060090610d22565b60405180910390fd5b61061333826108da565b610652576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064990610ef7565b60405180910390fd5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fd288ab5da2e1f37cf384a1565a3f905ad289b092fbdd31950dbbfef148c04f8860405160405180910390a350565b60005b828290508110156107935761078283838381811061076857610767610dd4565b5b905060200201602081019061077d91906109de565b610599565b8061078c90610e3c565b9050610747565b505050565b6107a061096e565b73ffffffffffffffffffffffffffffffffffffffff166107be6102aa565b73ffffffffffffffffffffffffffffffffffffffff1614610814576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080b90610f63565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109ab82610980565b9050919050565b6109bb816109a0565b81146109c657600080fd5b50565b6000813590506109d8816109b2565b92915050565b6000602082840312156109f4576109f3610976565b5b6000610a02848285016109c9565b91505092915050565b600080fd5b600080fd5b600080fd5b60008083601f840112610a3057610a2f610a0b565b5b8235905067ffffffffffffffff811115610a4d57610a4c610a10565b5b602083019150836020820283011115610a6957610a68610a15565b5b9250929050565b60008060208385031215610a8757610a86610976565b5b600083013567ffffffffffffffff811115610aa557610aa461097b565b5b610ab185828601610a1a565b92509250509250929050565b610ac6816109a0565b82525050565b6000602082019050610ae16000830184610abd565b92915050565b60008060408385031215610afe57610afd610976565b5b6000610b0c858286016109c9565b9250506020610b1d858286016109c9565b9150509250929050565b60008115159050919050565b610b3c81610b27565b82525050565b6000602082019050610b576000830184610b33565b92915050565b600081905092915050565b6000819050919050565b610b7b816109a0565b82525050565b6000610b8d8383610b72565b60208301905092915050565b6000610ba860208401846109c9565b905092915050565b6000602082019050919050565b6000610bc98385610b5d565b9350610bd482610b68565b8060005b85811015610c0d57610bea8284610b99565b610bf48882610b81565b9750610bff83610bb0565b925050600181019050610bd8565b5085925050509392505050565b6000610c27828486610bbd565b91508190509392505050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610ca0602683610c33565b9150610cab82610c44565b604082019050919050565b60006020820190508181036000830152610ccf81610c93565b9050919050565b7f57686974656c6973743a3a205a65726f20616464726573730000000000000000600082015250565b6000610d0c601883610c33565b9150610d1782610cd6565b602082019050919050565b60006020820190508181036000830152610d3b81610cff565b9050919050565b7f57686974656c6973743a3a204163636f756e7420697320616c7265616479207760008201527f686974656c697374656400000000000000000000000000000000000000000000602082015250565b6000610d9e602a83610c33565b9150610da982610d42565b604082019050919050565b60006020820190508181036000830152610dcd81610d91565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000610e4782610e32565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610e7a57610e79610e03565b5b600182019050919050565b7f57686974656c6973743a3a204163636f756e74206973206e6f7420776869746560008201527f6c69737465640000000000000000000000000000000000000000000000000000602082015250565b6000610ee1602683610c33565b9150610eec82610e85565b604082019050919050565b60006020820190508181036000830152610f1081610ed4565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610f4d602083610c33565b9150610f5882610f17565b602082019050919050565b60006020820190508181036000830152610f7c81610f40565b905091905056fea2646970667358221220936469ea0e1fc6ffd3bf490196d964fcf4ad5bea0b2389d0e571b49cecdbfd1764736f6c634300080c0033";

type WhitelistConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WhitelistConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Whitelist__factory extends ContractFactory {
  constructor(...args: WhitelistConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Whitelist> {
    return super.deploy(overrides || {}) as Promise<Whitelist>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Whitelist {
    return super.attach(address) as Whitelist;
  }
  override connect(signer: Signer): Whitelist__factory {
    return super.connect(signer) as Whitelist__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WhitelistInterface {
    return new utils.Interface(_abi) as WhitelistInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Whitelist {
    return new Contract(address, _abi, signerOrProvider) as Whitelist;
  }
}
