/* Do not change, this code is generated from Golang structs */


export class ModuleAccount {
    name: string;
    permissions: string[];

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new ModuleAccount();
        result.name = source["name"];
        result.permissions = source["permissions"];
        return result;
    }

    //[ModuleAccount:]


    //[end]
}
export class Int {

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new Int();
        return result;
    }

    //[Int:]


    //[end]
}
export class Coin {
    denom: string;
    amount: Int;

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new Coin();
        result.denom = source["denom"];
        result.amount = source["amount"] ? Int.createFrom(source["amount"]) : null;
        return result;
    }

    //[Coin:]


    //[end]
}
export class BaseAccount {
    address: number[];
    coins: Coin[];
    public_key: any;
    account_number: number;
    sequence: number;

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new BaseAccount();
        result.address = source["address"];
        result.coins = source["coins"] ? source["coins"].map(function(element: any) { return Coin.createFrom(element); }) : null;
        result.public_key = source["public_key"];
        result.account_number = source["account_number"];
        result.sequence = source["sequence"];
        return result;
    }

    //[BaseAccount:]


    //[end]
}
export class BaseVestingAccount {
    original_vesting: Coin[];
    delegated_free: Coin[];
    delegated_vesting: Coin[];
    end_time: number;

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new BaseVestingAccount();
        result.original_vesting = source["original_vesting"] ? source["original_vesting"].map(function(element: any) { return Coin.createFrom(element); }) : null;
        result.delegated_free = source["delegated_free"] ? source["delegated_free"].map(function(element: any) { return Coin.createFrom(element); }) : null;
        result.delegated_vesting = source["delegated_vesting"] ? source["delegated_vesting"].map(function(element: any) { return Coin.createFrom(element); }) : null;
        result.end_time = source["end_time"];
        return result;
    }

    //[BaseVestingAccount:]


    //[end]
}
export class ContinuousVestingAccount {
    start_time: number;

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new ContinuousVestingAccount();
        result.start_time = source["start_time"];
        return result;
    }

    //[ContinuousVestingAccount:]


    //[end]
}
export class MsgSend {
    from_address: number[];
    to_address: number[];
    amount: Coin[];

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new MsgSend();
        result.from_address = source["from_address"];
        result.to_address = source["to_address"];
        result.amount = source["amount"] ? source["amount"].map(function(element: any) { return Coin.createFrom(element); }) : null;
        return result;
    }

    //[MsgSend:]


    //[end]
}
export class ParamChange {
    subspace: string;
    key: string;
    subkey: string;
    value: string;

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new ParamChange();
        result.subspace = source["subspace"];
        result.key = source["key"];
        result.subkey = source["subkey"];
        result.value = source["value"];
        return result;
    }

    //[ParamChange:]


    //[end]
}
export class ParameterChangeProposal {
    title: string;
    description: string;
    changes: ParamChange[];

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new ParameterChangeProposal();
        result.title = source["title"];
        result.description = source["description"];
        result.changes = source["changes"] ? source["changes"].map(function(element: any) { return ParamChange.createFrom(element); }) : null;
        return result;
    }

    //[ParameterChangeProposal:]


    //[end]
}
export class Output {
    address: number[];
    coins: Coin[];

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new Output();
        result.address = source["address"];
        result.coins = source["coins"] ? source["coins"].map(function(element: any) { return Coin.createFrom(element); }) : null;
        return result;
    }

    //[Output:]


    //[end]
}
export class Input {
    address: number[];
    coins: Coin[];

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new Input();
        result.address = source["address"];
        result.coins = source["coins"] ? source["coins"].map(function(element: any) { return Coin.createFrom(element); }) : null;
        return result;
    }

    //[Input:]


    //[end]
}
export class MsgMultiSend {
    inputs: Input[];
    outputs: Output[];

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new MsgMultiSend();
        result.inputs = source["inputs"] ? source["inputs"].map(function(element: any) { return Input.createFrom(element); }) : null;
        result.outputs = source["outputs"] ? source["outputs"].map(function(element: any) { return Output.createFrom(element); }) : null;
        return result;
    }

    //[MsgMultiSend:]


    //[end]
}
export class StdSignature {
    pub_key: any;
    signature: number[];

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new StdSignature();
        result.pub_key = source["pub_key"];
        result.signature = source["signature"];
        return result;
    }

    //[StdSignature:]


    //[end]
}
export class StdFee {
    amount: Coin[];
    gas: number;

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new StdFee();
        result.amount = source["amount"] ? source["amount"].map(function(element: any) { return Coin.createFrom(element); }) : null;
        result.gas = source["gas"];
        return result;
    }

    //[StdFee:]


    //[end]
}
export class StdTx {
    msg: any[];
    fee: StdFee;
    signatures: StdSignature[];
    memo: string;

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new StdTx();
        result.msg = source["msg"];
        result.fee = source["fee"] ? StdFee.createFrom(source["fee"]) : null;
        result.signatures = source["signatures"] ? source["signatures"].map(function(element: any) { return StdSignature.createFrom(element); }) : null;
        result.memo = source["memo"];
        return result;
    }

    //[StdTx:]


    //[end]
}
export class PrivKeySecp256k1 {

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new PrivKeySecp256k1();
        return result;
    }

    //[PrivKeySecp256k1:]


    //[end]
}
export class Supply {
    total: Coin[];

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new Supply();
        result.total = source["total"] ? source["total"].map(function(element: any) { return Coin.createFrom(element); }) : null;
        return result;
    }

    //[Supply:]


    //[end]
}
export class DelayedVestingAccount {

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new DelayedVestingAccount();
        return result;
    }

    //[DelayedVestingAccount:]


    //[end]
}
export class PubKeyEd25519 {

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new PubKeyEd25519();
        return result;
    }

    //[PubKeyEd25519:]


    //[end]
}
export class PubKeySecp256k1 {

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new PubKeySecp256k1();
        return result;
    }

    //[PubKeySecp256k1:]


    //[end]
}
export class PubKeyMultisigThreshold {
    threshold: number;
    pubkeys: any[];

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new PubKeyMultisigThreshold();
        result.threshold = source["threshold"];
        result.pubkeys = source["pubkeys"];
        return result;
    }

    //[PubKeyMultisigThreshold:]


    //[end]
}
export class PrivKeyEd25519 {

    static createFrom(source: any) {
        if ('string' === typeof source) source = JSON.parse(source);
        const result = new PrivKeyEd25519();
        return result;
    }

    //[PrivKeyEd25519:]


    //[end]
}