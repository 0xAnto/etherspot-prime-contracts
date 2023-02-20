/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  VerifyingPaymaster,
  VerifyingPaymasterInterface,
} from "../../src/VerifyingPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_verifyingSigner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
    ],
    name: "getHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
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
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
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
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    name: "setEntryPoint",
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
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "requiredPreFund",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "sigTimeRange",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifyingSigner",
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
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200282c3803806200282c833981810160405281019062000037919062000431565b81620000586200004c6200013260201b60201c565b6200013a60201b60201c565b62000074674eccc7e3b137752860c01b620001fe60201b60201c565b620000906761d2b9b0f67ad7c960c01b620001fe60201b60201c565b620000ac67d9ad280a158e404360c01b620001fe60201b60201c565b620000bd816200020160201b60201c565b50620000da67c90be28e36368ac560c01b620002c560201b60201c565b620000f66776d3724e5eb50e7e60c01b620002c560201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505050620004fb565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b50565b6200021d6725e7584f7e25728160c01b620001fe60201b60201c565b6200022d620002c860201b60201c565b62000249674d431bb5bd2d8c0660c01b620001fe60201b60201c565b62000265671f8727ca4f9ea6f060c01b620001fe60201b60201c565b62000281679519937192be203060c01b620001fe60201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b50565b620002d86200013260201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620002fe6200035960201b60201c565b73ffffffffffffffffffffffffffffffffffffffff161462000357576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200034e90620004d9565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003b48262000387565b9050919050565b6000620003c882620003a7565b9050919050565b620003da81620003bb565b8114620003e657600080fd5b50565b600081519050620003fa81620003cf565b92915050565b6200040b81620003a7565b81146200041757600080fd5b50565b6000815190506200042b8162000400565b92915050565b600080604083850312156200044b576200044a62000382565b5b60006200045b85828601620003e9565b92505060206200046e858286016200041a565b9150509250929050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000620004c160208362000478565b9150620004ce8262000489565b602082019050919050565b60006020820190508181036000830152620004f481620004b2565b9050919050565b60805161230e6200051e600039600081816105330152610e37015261230e6000f3fe6080604052600436106100e85760003560e01c8063b0d691fe1161008a578063c399ec8811610059578063c399ec8814610299578063d0e30db0146102c4578063f2fde38b146102ce578063f465c77e146102f7576100e8565b8063b0d691fe146101f1578063bb9fe6bf1461021c578063c23a5cea14610233578063c266f2921461025c576100e8565b8063584465f2116100c6578063584465f21461015d578063715018a6146101865780638da5cb5b1461019d578063a9a23409146101c8576100e8565b80630396cb60146100ed578063205c28781461010957806323d9ac9b14610132575b600080fd5b6101076004803603810190610102919061159f565b610335565b005b34801561011557600080fd5b50610130600480360381019061012b9190611660565b610432565b005b34801561013e57600080fd5b50610147610531565b60405161015491906116c1565b60405180910390f35b34801561016957600080fd5b50610184600480360381019061017f919061171a565b610555565b005b34801561019257600080fd5b5061019b6105f1565b005b3480156101a957600080fd5b506101b2610605565b6040516101bf91906116c1565b60405180910390f35b3480156101d457600080fd5b506101ef60048036038101906101ea91906117d1565b61062e565b005b3480156101fd57600080fd5b506102066106ac565b60405161021391906118a4565b60405180910390f35b34801561022857600080fd5b506102316106d2565b005b34801561023f57600080fd5b5061025a600480360381019061025591906118bf565b6107c2565b005b34801561026857600080fd5b50610283600480360381019061027e9190611911565b6108be565b6040516102909190611973565b60405180910390f35b3480156102a557600080fd5b506102ae6109a5565b6040516102bb919061199d565b60405180910390f35b6102cc610a84565b005b3480156102da57600080fd5b506102f560048036038101906102f091906119e4565b610b50565b005b34801561030357600080fd5b5061031e60048036038101906103199190611a3d565b610bd4565b60405161032c929190611b45565b60405180910390f35b61034967ba155f5efe25da4f60c01b610f2d565b610351610f30565b6103656736fb2667161c914060c01b610f2d565b6103796741f0617f9794d16860c01b610f2d565b61038d67790e549db14df0c260c01b610f2d565b6103a167ce0737df6b9e42bb60c01b610f2d565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630396cb6034836040518363ffffffff1660e01b81526004016103fd9190611b84565b6000604051808303818588803b15801561041657600080fd5b505af115801561042a573d6000803e3d6000fd5b505050505050565b61044667b0a8c68e3f06c7ba60c01b610f2d565b61044e610f30565b610462678a1f9def4c20c6ff60c01b610f2d565b610476674342d23de7a3ed5a60c01b610f2d565b61048a67cc9569cc5fe68f9d60c01b610f2d565b61049e67b6f029ee77278ef160c01b610f2d565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663205c287883836040518363ffffffff1660e01b81526004016104fb929190611bae565b600060405180830381600087803b15801561051557600080fd5b505af1158015610529573d6000803e3d6000fd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6105696725e7584f7e25728160c01b610f2d565b610571610f30565b610585674d431bb5bd2d8c0660c01b610f2d565b610599671f8727ca4f9ea6f060c01b610f2d565b6105ad679519937192be203060c01b610f2d565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6105f9610f30565b6106036000610fae565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61064267850f91523560c17460c01b610f2d565b61065667cfcc64f9dd3bc74260c01b610f2d565b61066a6720fb2285cc651da660c01b610f2d565b610672611072565b61068667df35162198eda5c560c01b610f2d565b61069a67124d5c09ea14919f60c01b610f2d565b6106a684848484611132565b50505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6106e667095d65a7a668706c60c01b610f2d565b6106ee610f30565b610702674ef176416d9783d860c01b610f2d565b61071667bfe322990a47bc0760c01b610f2d565b61072a67874d39101d99253960c01b610f2d565b61073e67b423ba4701a0393460c01b610f2d565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156107a857600080fd5b505af11580156107bc573d6000803e3d6000fd5b50505050565b6107d66752f5d809a1298eaf60c01b610f2d565b6107de610f30565b6107f267ef5820faf1447c6560c01b610f2d565b61080667f97794d1bddfa2e060c01b610f2d565b61081a674312e8c459c73fef60c01b610f2d565b61082e673464294413aed7d760c01b610f2d565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c23a5cea826040518263ffffffff1660e01b81526004016108899190611bd7565b600060405180830381600087803b1580156108a357600080fd5b505af11580156108b7573d6000803e3d6000fd5b5050505050565b60006108d46778972ab5051fc0e060c01b6111bd565b6108e867177c4f422f08c4da60c01b6111bd565b6108fc671649d79ec01f592560c01b6111bd565b610905826111c0565b826020013583806040019061091a9190611c01565b604051610928929190611ca3565b60405180910390208480606001906109409190611c01565b60405161094e929190611ca3565b604051809103902085608001358660a001358760c001358860e0013589610100013560405160200161098899989796959493929190611cbc565b604051602081830303815290604052805190602001209050919050565b60006109bb67f8256bc3292ec2f860c01b610f2d565b6109cf674659961ee68435b060c01b610f2d565b6109e36725709d707ada999460c01b610f2d565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610a3e91906116c1565b602060405180830381865afa158015610a5b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7f9190611d5e565b905090565b610a9867fa008f0a2a61337260c01b610f2d565b610aac670e56d1bb5ea9d80c60c01b610f2d565b610ac0674e2d9df39913ac2060c01b610f2d565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b760faf934306040518363ffffffff1660e01b8152600401610b1c91906116c1565b6000604051808303818588803b158015610b3557600080fd5b505af1158015610b49573d6000803e3d6000fd5b5050505050565b610b58610f30565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610bc8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bbf90611e0e565b60405180910390fd5b610bd181610fae565b50565b60606000610bec673a4e24c8aa3a574a60c01b6111bd565b610c00678f01fe81454986c660c01b6111bd565b610c1467420cfe5852eca3d360c01b6111bd565b610c2867ef12a1a6b1d1340a60c01b6111bd565b6000610c33866108be565b9050610c49673f18e27052d85b5160c01b6111bd565b610c5d67b80004015611dae060c01b6111bd565b36600087806101200190610c719190611c01565b91509150610c8967d044baa882449b2460c01b6111bd565b610c9d67473ffd254477866360c01b6111bd565b6000601483839050610caf9190611e5d565b9050610cc567fdf6d2b86bcb573060c01b6111bd565b610cd967d283fbdfc89ad72060c01b6111bd565b610ced6798f2f2656028a69360c01b6111bd565b604081148015610d0d5750610d0c67049d7082df8c2a2860c01b611249565b5b80610d345750604181148015610d335750610d326781b629f3ce3e276d60c01b611249565b5b5b610d73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6a90611f03565b60405180910390fd5b610d87674c4e20d66c7bf0bf60c01b6111bd565b610d9b6758bbc7e010934c6060c01b6111bd565b610daf6751ac491c491e1ef460c01b6111bd565b610e1f83836014908092610dc593929190611f2d565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610e1186611254565b61128490919063ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610ecd57610e8567b3e14e609d8dbf8f60c01b6111bd565b610e9967c9881328157505db60c01b6111bd565b610ead67a273f208a3f903d460c01b6111bd565b600160405180602001604052806000815250909550955050505050610f25565b610ee167232d7cd6a3beb17460c01b6111bd565b610ef567eb4313b6ff67187f60c01b6111bd565b610f0967744c1243f1a4159e60c01b6111bd565b6000604051806020016040528060008152509095509550505050505b935093915050565b50565b610f386112ab565b73ffffffffffffffffffffffffffffffffffffffff16610f56610605565b73ffffffffffffffffffffffffffffffffffffffff1614610fac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa390611fb4565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611086679bc326c49484188460c01b610f2d565b61109a6724b5ec39eafd38f560c01b610f2d565b6110ae673113ee9c61faced260c01b610f2d565b6110c2678b7ae48ea5ddd2cb60c01b610f2d565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461111c57600080fd5b61113067e77cb1e4072ac22860c01b610f2d565b565b611146671367f038146a276b60c01b610f2d565b61115a67117ee8376efb738560c01b610f2d565b61116e6797f87360883c20c560c01b610f2d565b61118267314d1d68847cc6ee60c01b610f2d565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b490612020565b60405180910390fd5b50565b60006111d6674d112b9b055fdc4360c01b6112b3565b6111ea671bc241ed701f8cda60c01b6112b3565b6111fe675d64e1cde57cea0a60c01b6112b3565b600061121467105120705ebd759060c01b6112b3565b8235905061122c677bfb9fddbbb3e35360c01b6112b3565b61124067063cfd2aab94839860c01b6112b3565b80915050919050565b600060019050919050565b60008160405160200161126791906120b8565b604051602081830303815290604052805190602001209050919050565b600080600061129385856112b6565b915091506112a081611308565b819250505092915050565b600033905090565b50565b6000806041835114156112f85760008060006020860151925060408601519150606086015160001a90506112ec87828585611476565b94509450505050611301565b60006002915091505b9250929050565b6000600481111561131c5761131b6120de565b5b81600481111561132f5761132e6120de565b5b141561133a57611473565b6001600481111561134e5761134d6120de565b5b816004811115611361576113606120de565b5b14156113a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139990612159565b60405180910390fd5b600260048111156113b6576113b56120de565b5b8160048111156113c9576113c86120de565b5b141561140a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611401906121c5565b60405180910390fd5b6003600481111561141e5761141d6120de565b5b816004811115611431576114306120de565b5b1415611472576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161146990612257565b60405180910390fd5b5b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156114b1576000600391509150611550565b6000600187878787604051600081526020016040526040516114d69493929190612293565b6020604051602081039080840390855afa1580156114f8573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561154757600060019250925050611550565b80600092509250505b94509492505050565b600080fd5b600080fd5b600063ffffffff82169050919050565b61157c81611563565b811461158757600080fd5b50565b60008135905061159981611573565b92915050565b6000602082840312156115b5576115b4611559565b5b60006115c38482850161158a565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006115f7826115cc565b9050919050565b611607816115ec565b811461161257600080fd5b50565b600081359050611624816115fe565b92915050565b6000819050919050565b61163d8161162a565b811461164857600080fd5b50565b60008135905061165a81611634565b92915050565b6000806040838503121561167757611676611559565b5b600061168585828601611615565b92505060206116968582860161164b565b9150509250929050565b60006116ab826115cc565b9050919050565b6116bb816116a0565b82525050565b60006020820190506116d660008301846116b2565b92915050565b60006116e7826116a0565b9050919050565b6116f7816116dc565b811461170257600080fd5b50565b600081359050611714816116ee565b92915050565b6000602082840312156117305761172f611559565b5b600061173e84828501611705565b91505092915050565b6003811061175457600080fd5b50565b60008135905061176681611747565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126117915761179061176c565b5b8235905067ffffffffffffffff8111156117ae576117ad611771565b5b6020830191508360018202830111156117ca576117c9611776565b5b9250929050565b600080600080606085870312156117eb576117ea611559565b5b60006117f987828801611757565b945050602085013567ffffffffffffffff81111561181a5761181961155e565b5b6118268782880161177b565b935093505060406118398782880161164b565b91505092959194509250565b6000819050919050565b600061186a611865611860846115cc565b611845565b6115cc565b9050919050565b600061187c8261184f565b9050919050565b600061188e82611871565b9050919050565b61189e81611883565b82525050565b60006020820190506118b96000830184611895565b92915050565b6000602082840312156118d5576118d4611559565b5b60006118e384828501611615565b91505092915050565b600080fd5b60006101608284031215611908576119076118ec565b5b81905092915050565b60006020828403121561192757611926611559565b5b600082013567ffffffffffffffff8111156119455761194461155e565b5b611951848285016118f1565b91505092915050565b6000819050919050565b61196d8161195a565b82525050565b60006020820190506119886000830184611964565b92915050565b6119978161162a565b82525050565b60006020820190506119b2600083018461198e565b92915050565b6119c1816116a0565b81146119cc57600080fd5b50565b6000813590506119de816119b8565b92915050565b6000602082840312156119fa576119f9611559565b5b6000611a08848285016119cf565b91505092915050565b611a1a8161195a565b8114611a2557600080fd5b50565b600081359050611a3781611a11565b92915050565b600080600060608486031215611a5657611a55611559565b5b600084013567ffffffffffffffff811115611a7457611a7361155e565b5b611a80868287016118f1565b9350506020611a9186828701611a28565b9250506040611aa28682870161164b565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b83811015611ae6578082015181840152602081019050611acb565b83811115611af5576000848401525b50505050565b6000601f19601f8301169050919050565b6000611b1782611aac565b611b218185611ab7565b9350611b31818560208601611ac8565b611b3a81611afb565b840191505092915050565b60006040820190508181036000830152611b5f8185611b0c565b9050611b6e602083018461198e565b9392505050565b611b7e81611563565b82525050565b6000602082019050611b996000830184611b75565b92915050565b611ba8816115ec565b82525050565b6000604082019050611bc36000830185611b9f565b611bd0602083018461198e565b9392505050565b6000602082019050611bec6000830184611b9f565b92915050565b600080fd5b600080fd5b600080fd5b60008083356001602003843603038112611c1e57611c1d611bf2565b5b80840192508235915067ffffffffffffffff821115611c4057611c3f611bf7565b5b602083019250600182023603831315611c5c57611c5b611bfc565b5b509250929050565b600081905092915050565b82818337600083830152505050565b6000611c8a8385611c64565b9350611c97838584611c6f565b82840190509392505050565b6000611cb0828486611c7e565b91508190509392505050565b600061012082019050611cd2600083018c6116b2565b611cdf602083018b61198e565b611cec604083018a611964565b611cf96060830189611964565b611d06608083018861198e565b611d1360a083018761198e565b611d2060c083018661198e565b611d2d60e083018561198e565b611d3b61010083018461198e565b9a9950505050505050505050565b600081519050611d5881611634565b92915050565b600060208284031215611d7457611d73611559565b5b6000611d8284828501611d49565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611df8602683611d8b565b9150611e0382611d9c565b604082019050919050565b60006020820190508181036000830152611e2781611deb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611e688261162a565b9150611e738361162a565b925082821015611e8657611e85611e2e565b5b828203905092915050565b7f566572696679696e675061796d61737465723a20696e76616c6964207369676e60008201527f6174757265206c656e67746820696e207061796d6173746572416e6444617461602082015250565b6000611eed604083611d8b565b9150611ef882611e91565b604082019050919050565b60006020820190508181036000830152611f1c81611ee0565b9050919050565b600080fd5b600080fd5b60008085851115611f4157611f40611f23565b5b83861115611f5257611f51611f28565b5b6001850283019150848603905094509492505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611f9e602083611d8b565b9150611fa982611f68565b602082019050919050565b60006020820190508181036000830152611fcd81611f91565b9050919050565b7f6d757374206f7665727269646500000000000000000000000000000000000000600082015250565b600061200a600d83611d8b565b915061201582611fd4565b602082019050919050565b6000602082019050818103600083015261203981611ffd565b9050919050565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000612081601c83612040565b915061208c8261204b565b601c82019050919050565b6000819050919050565b6120b26120ad8261195a565b612097565b82525050565b60006120c382612074565b91506120cf82846120a1565b60208201915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000612143601883611d8b565b915061214e8261210d565b602082019050919050565b6000602082019050818103600083015261217281612136565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b60006121af601f83611d8b565b91506121ba82612179565b602082019050919050565b600060208201905081810360008301526121de816121a2565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000612241602283611d8b565b915061224c826121e5565b604082019050919050565b6000602082019050818103600083015261227081612234565b9050919050565b600060ff82169050919050565b61228d81612277565b82525050565b60006080820190506122a86000830187611964565b6122b56020830186612284565b6122c26040830185611964565b6122cf6060830184611964565b9594505050505056fea2646970667358221220a7ddcd7da42db344ebc0f6f6fddfd609d65ca8f24972a87b1fbe03830393709264736f6c634300080c0033";

type VerifyingPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VerifyingPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VerifyingPaymaster__factory extends ContractFactory {
  constructor(...args: VerifyingPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    _verifyingSigner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VerifyingPaymaster> {
    return super.deploy(
      _entryPoint,
      _verifyingSigner,
      overrides || {}
    ) as Promise<VerifyingPaymaster>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    _verifyingSigner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _entryPoint,
      _verifyingSigner,
      overrides || {}
    );
  }
  override attach(address: string): VerifyingPaymaster {
    return super.attach(address) as VerifyingPaymaster;
  }
  override connect(signer: Signer): VerifyingPaymaster__factory {
    return super.connect(signer) as VerifyingPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifyingPaymasterInterface {
    return new utils.Interface(_abi) as VerifyingPaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VerifyingPaymaster {
    return new Contract(address, _abi, signerOrProvider) as VerifyingPaymaster;
  }
}
