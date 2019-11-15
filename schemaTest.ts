/* Do not change, this code is generated from Golang structs */


export interface Int {
}
export interface Coin {
    denom: string;
    amount: Int;
}
export interface MsgSend {
    from_address: number[];
    to_address: number[];
    amount: Coin[];
}
export interface ModuleAccount {
    name: string;
    permissions: string[];
}
export interface PrivKeyEd25519 {
}
export interface PrivKeySecp256k1 {
}
export interface ContinuousVestingAccount {
    start_time: number;
}
export interface ParamChange {
    subspace: string;
    key: string;
    subkey?: string;
    value: string;
}
export interface ParameterChangeProposal {
    title: string;
    description: string;
    changes: ParamChange[];
}
export interface BaseAccount {
    address: number[];
    coins: Coin[];
    public_key: any;
    account_number: number;
    sequence: number;
}
export interface Output {
    address: number[];
    coins: Coin[];
}
export interface Input {
    address: number[];
    coins: Coin[];
}
export interface MsgMultiSend {
    inputs: Input[];
    outputs: Output[];
}
export interface PubKeyMultisigThreshold {
    threshold: number;
    pubkeys: any[];
}
export interface BaseVestingAccount {
    original_vesting: Coin[];
    delegated_free: Coin[];
    delegated_vesting: Coin[];
    end_time: number;
}
export interface DelayedVestingAccount {
}
export interface StdSignature {
    pub_key: any;
    signature: number[];
}
export interface StdFee {
    amount: Coin[];
    gas: number;
}
export interface StdTx {
    msg: any[];
    fee: StdFee;
    signatures: StdSignature[];
    memo: string;
}
export interface Supply {
    total: Coin[];
}
export interface PubKeyEd25519 {
}
export interface PubKeySecp256k1 {
}