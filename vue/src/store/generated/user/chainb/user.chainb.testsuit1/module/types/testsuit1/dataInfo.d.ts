import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "user.chainb.testsuit1";
export interface DataInfo {
    creator: string;
    id: number;
    dataIndex: string;
    data: string;
}
export declare const DataInfo: {
    encode(message: DataInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): DataInfo;
    fromJSON(object: any): DataInfo;
    toJSON(message: DataInfo): unknown;
    fromPartial(object: DeepPartial<DataInfo>): DataInfo;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
