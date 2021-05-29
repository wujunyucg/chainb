import { ReceiveData } from "../testsuit1/receiveData";
import { DataInfo } from "../testsuit1/dataInfo";
import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "user.chainb.testsuit1";
/** GenesisState defines the testsuit1 module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    receiveDataList: ReceiveData[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    dataInfoList: DataInfo[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    portId: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
