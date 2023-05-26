/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface ACLInterface extends utils.Interface {
  functions: {
    "addGuardian(address)": FunctionFragment;
    "addOwner(address)": FunctionFragment;
    "isGuardian(address)": FunctionFragment;
    "isOwner(address)": FunctionFragment;
    "removeGuardian(address)": FunctionFragment;
    "removeOwner(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addGuardian"
      | "addOwner"
      | "isGuardian"
      | "isOwner"
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
    functionFragment: "isGuardian",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isOwner",
    values: [PromiseOrValue<string>]
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
  decodeFunctionResult(functionFragment: "isGuardian", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
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
  };

  getEvent(nameOrSignatureOrTopic: "GuardianAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GuardianRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerRemoved"): EventFragment;
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

export interface ACL extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ACLInterface;

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

    isGuardian(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isOwner(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

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

  isGuardian(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isOwner(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

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

    isGuardian(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOwner(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

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

    isGuardian(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOwner(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    isGuardian(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOwner(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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
