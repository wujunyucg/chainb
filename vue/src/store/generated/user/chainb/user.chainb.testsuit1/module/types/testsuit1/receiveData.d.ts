import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "user.chainb.testsuit1";
export interface ReceiveData {
    index: string;
    dataIndex: string;
    data: string;
    chain: string;
}
export declare const ReceiveData: {
    encode(message: ReceiveData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ReceiveData;
    fromJSON(object: any): ReceiveData;
    toJSON(message: ReceiveData): unknown;
    fromPartial(object: DeepPartial<ReceiveData>): ReceiveData;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
