/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface AccessControllerInterface extends utils.Interface {
  functions: {
    "addGuardian(address)": FunctionFragment;
    "addOwner(address)": FunctionFragment;
    "changeProposalTimelock(uint256)": FunctionFragment;
    "discardCurrentProposal()": FunctionFragment;
    "getProposal(uint256)": FunctionFragment;
    "guardianCosign()": FunctionFragment;
    "guardianCount()": FunctionFragment;
    "guardianPropose(address)": FunctionFragment;
    "isGuardian(address)": FunctionFragment;
    "isOwner(address)": FunctionFragment;
    "ownerCount()": FunctionFragment;
    "proposalId()": FunctionFragment;
    "proposalTimelock()": FunctionFragment;
    "removeGuardian(address)": FunctionFragment;
    "removeOwner(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addGuardian"
      | "addOwner"
      | "changeProposalTimelock"
      | "discardCurrentProposal"
      | "getProposal"
      | "guardianCosign"
      | "guardianCount"
      | "guardianPropose"
      | "isGuardian"
      | "isOwner"
      | "ownerCount"
      | "proposalId"
      | "proposalTimelock"
      | "removeGuardian"
      | "removeOwner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addGuardian",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeProposalTimelock",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "discardCurrentProposal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProposal",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "guardianCosign",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "guardianCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "guardianPropose",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isGuardian",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalTimelock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeGuardian",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeOwner",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeProposalTimelock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "discardCurrentProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "guardianCosign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "guardianCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "guardianPropose",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isGuardian", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proposalId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalTimelock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeOwner",
    data: BytesLike
  ): Result;

  events: {
    "GuardianAdded(address)": EventFragment;
    "GuardianRemoved(address)": EventFragment;
    "OwnerAdded(address)": EventFragment;
    "OwnerRemoved(address)": EventFragment;
    "ProposalDiscarded(uint256,address)": EventFragment;
    "ProposalSubmitted(uint256,address,address)": EventFragment;
    "QuorumNotReached(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GuardianAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GuardianRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalDiscarded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalSubmitted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuorumNotReached"): EventFragment;
}

export interface GuardianAddedEventObject {
  newGuardian: string;
}
export type GuardianAddedEvent = TypedEvent<[string], GuardianAddedEventObject>;

export type GuardianAddedEventFilter = TypedEventFilter<GuardianAddedEvent>;

export interface GuardianRemovedEventObject {
  removedGuardian: string;
}
export type GuardianRemovedEvent = TypedEvent<
  [string],
  GuardianRemovedEventObject
>;

export type GuardianRemovedEventFilter = TypedEventFilter<GuardianRemovedEvent>;

export interface OwnerAddedEventObject {
  newOwner: string;
}
export type OwnerAddedEvent = TypedEvent<[string], OwnerAddedEventObject>;

export type OwnerAddedEventFilter = TypedEventFilter<OwnerAddedEvent>;

export interface OwnerRemovedEventObject {
  removedOwner: string;
}
export type OwnerRemovedEvent = TypedEvent<[string], OwnerRemovedEventObject>;

export type OwnerRemovedEventFilter = TypedEventFilter<OwnerRemovedEvent>;

export interface ProposalDiscardedEventObject {
  proposalId: BigNumber;
  discardedBy: string;
}
export type ProposalDiscardedEvent = TypedEvent<
  [BigNumber, string],
  ProposalDiscardedEventObject
>;

export type ProposalDiscardedEventFilter =
  TypedEventFilter<ProposalDiscardedEvent>;

export interface ProposalSubmittedEventObject {
  proposalId: BigNumber;
  newOwnerProposed: string;
  proposer: string;
}
export type ProposalSubmittedEvent = TypedEvent<
  [BigNumber, string, string],
  ProposalSubmittedEventObject
>;

export type ProposalSubmittedEventFilter =
  TypedEventFilter<ProposalSubmittedEvent>;

export interface QuorumNotReachedEventObject {
  proposalId: BigNumber;
  newOwnerProposed: string;
  approvalCount: BigNumber;
}
export type QuorumNotReachedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  QuorumNotReachedEventObject
>;

export type QuorumNotReachedEventFilter =
  TypedEventFilter<QuorumNotReachedEvent>;

export interface AccessController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccessControllerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addGuardian(
      _newGuardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addOwner(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeProposalTimelock(
      _newTimelock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    discardCurrentProposal(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getProposal(
      _proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string[], boolean, BigNumber] & {
        ownerProposed_: string;
        approvalCount_: BigNumber;
        guardiansApproved_: string[];
        resolved_: boolean;
        proposedAt_: BigNumber;
      }
    >;

    guardianCosign(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    guardianCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    guardianPropose(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isGuardian(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isOwner(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    ownerCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposalId(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposalTimelock(overrides?: CallOverrides): Promise<[BigNumber]>;

    removeGuardian(
      _guardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addGuardian(
    _newGuardian: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addOwner(
    _newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeProposalTimelock(
    _newTimelock: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  discardCurrentProposal(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getProposal(
    _proposalId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string[], boolean, BigNumber] & {
      ownerProposed_: string;
      approvalCount_: BigNumber;
      guardiansApproved_: string[];
      resolved_: boolean;
      proposedAt_: BigNumber;
    }
  >;

  guardianCosign(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  guardianCount(overrides?: CallOverrides): Promise<BigNumber>;

  guardianPropose(
    _newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isGuardian(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isOwner(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  ownerCount(overrides?: CallOverrides): Promise<BigNumber>;

  proposalId(overrides?: CallOverrides): Promise<BigNumber>;

  proposalTimelock(overrides?: CallOverrides): Promise<BigNumber>;

  removeGuardian(
    _guardian: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addGuardian(
      _newGuardian: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addOwner(
      _newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    changeProposalTimelock(
      _newTimelock: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    discardCurrentProposal(overrides?: CallOverrides): Promise<void>;

    getProposal(
      _proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string[], boolean, BigNumber] & {
        ownerProposed_: string;
        approvalCount_: BigNumber;
        guardiansApproved_: string[];
        resolved_: boolean;
        proposedAt_: BigNumber;
      }
    >;

    guardianCosign(overrides?: CallOverrides): Promise<void>;

    guardianCount(overrides?: CallOverrides): Promise<BigNumber>;

    guardianPropose(
      _newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isGuardian(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOwner(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    ownerCount(overrides?: CallOverrides): Promise<BigNumber>;

    proposalId(overrides?: CallOverrides): Promise<BigNumber>;

    proposalTimelock(overrides?: CallOverrides): Promise<BigNumber>;

    removeGuardian(
      _guardian: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeOwner(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GuardianAdded(address)"(newGuardian?: null): GuardianAddedEventFilter;
    GuardianAdded(newGuardian?: null): GuardianAddedEventFilter;

    "GuardianRemoved(address)"(
      removedGuardian?: null
    ): GuardianRemovedEventFilter;
    GuardianRemoved(removedGuardian?: null): GuardianRemovedEventFilter;

    "OwnerAdded(address)"(newOwner?: null): OwnerAddedEventFilter;
    OwnerAdded(newOwner?: null): OwnerAddedEventFilter;

    "OwnerRemoved(address)"(removedOwner?: null): OwnerRemovedEventFilter;
    OwnerRemoved(removedOwner?: null): OwnerRemovedEventFilter;

    "ProposalDiscarded(uint256,address)"(
      proposalId?: null,
      discardedBy?: null
    ): ProposalDiscardedEventFilter;
    ProposalDiscarded(
      proposalId?: null,
      discardedBy?: null
    ): ProposalDiscardedEventFilter;

    "ProposalSubmitted(uint256,address,address)"(
      proposalId?: null,
      newOwnerProposed?: null,
      proposer?: null
    ): ProposalSubmittedEventFilter;
    ProposalSubmitted(
      proposalId?: null,
      newOwnerProposed?: null,
      proposer?: null
    ): ProposalSubmittedEventFilter;

    "QuorumNotReached(uint256,address,uint256)"(
      proposalId?: null,
      newOwnerProposed?: null,
      approvalCount?: null
    ): QuorumNotReachedEventFilter;
    QuorumNotReached(
      proposalId?: null,
      newOwnerProposed?: null,
      approvalCount?: null
    ): QuorumNotReachedEventFilter;
  };

  estimateGas: {
    addGuardian(
      _newGuardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addOwner(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeProposalTimelock(
      _newTimelock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    discardCurrentProposal(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getProposal(
      _proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    guardianCosign(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    guardianCount(overrides?: CallOverrides): Promise<BigNumber>;

    guardianPropose(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isGuardian(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOwner(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerCount(overrides?: CallOverrides): Promise<BigNumber>;

    proposalId(overrides?: CallOverrides): Promise<BigNumber>;

    proposalTimelock(overrides?: CallOverrides): Promise<BigNumber>;

    removeGuardian(
      _guardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addGuardian(
      _newGuardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addOwner(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeProposalTimelock(
      _newTimelock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    discardCurrentProposal(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getProposal(
      _proposalId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    guardianCosign(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    guardianCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    guardianPropose(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isGuardian(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOwner(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownerCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalTimelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeGuardian(
      _guardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
