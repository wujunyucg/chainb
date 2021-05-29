import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "user.chainb.testsuit1";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgSendIbcDataInfo {
    sender: string;
    port: string;
    channelID: string;
    timeoutTimestamp: number;
    dataIndex: string;
    data: string;
}
export interface MsgSendIbcDataInfoResponse {
}
export interface MsgCreateDataInfo {
    creator: string;
    dataIndex: string;
    data: string;
}
export interface MsgCreateDataInfoResponse {
    id: number;
}
export interface MsgUpdateDataInfo {
    creator: string;
    id: number;
    dataIndex: string;
    data: string;
}
export interface MsgUpdateDataInfoResponse {
}
export interface MsgDeleteDataInfo {
    creator: string;
    id: number;
}
export interface MsgDeleteDataInfoResponse {
}
export declare const MsgSendIbcDataInfo: {
    encode(message: MsgSendIbcDataInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendIbcDataInfo;
    fromJSON(object: any): MsgSendIbcDataInfo;
    toJSON(message: MsgSendIbcDataInfo): unknown;
    fromPartial(object: DeepPartial<MsgSendIbcDataInfo>): MsgSendIbcDataInfo;
};
export declare const MsgSendIbcDataInfoResponse: {
    encode(_: MsgSendIbcDataInfoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendIbcDataInfoResponse;
    fromJSON(_: any): MsgSendIbcDataInfoResponse;
    toJSON(_: MsgSendIbcDataInfoResponse): unknown;
    fromPartial(_: DeepPartial<MsgSendIbcDataInfoResponse>): MsgSendIbcDataInfoResponse;
};
export declare const MsgCreateDataInfo: {
    encode(message: MsgCreateDataInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDataInfo;
    fromJSON(object: any): MsgCreateDataInfo;
    toJSON(message: MsgCreateDataInfo): unknown;
    fromPartial(object: DeepPartial<MsgCreateDataInfo>): MsgCreateDataInfo;
};
export declare const MsgCreateDataInfoResponse: {
    encode(message: MsgCreateDataInfoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDataInfoResponse;
    fromJSON(object: any): MsgCreateDataInfoResponse;
    toJSON(message: MsgCreateDataInfoResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateDataInfoResponse>): MsgCreateDataInfoResponse;
};
export declare const MsgUpdateDataInfo: {
    encode(message: MsgUpdateDataInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDataInfo;
    fromJSON(object: any): MsgUpdateDataInfo;
    toJSON(message: MsgUpdateDataInfo): unknown;
    fromPartial(object: DeepPartial<MsgUpdateDataInfo>): MsgUpdateDataInfo;
};
export declare const MsgUpdateDataInfoResponse: {
    encode(_: MsgUpdateDataInfoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDataInfoResponse;
    fromJSON(_: any): MsgUpdateDataInfoResponse;
    toJSON(_: MsgUpdateDataInfoResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateDataInfoResponse>): MsgUpdateDataInfoResponse;
};
export declare const MsgDeleteDataInfo: {
    encode(message: MsgDeleteDataInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteDataInfo;
    fromJSON(object: any): MsgDeleteDataInfo;
    toJSON(message: MsgDeleteDataInfo): unknown;
    fromPartial(object: DeepPartial<MsgDeleteDataInfo>): MsgDeleteDataInfo;
};
export declare const MsgDeleteDataInfoResponse: {
    encode(_: MsgDeleteDataInfoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteDataInfoResponse;
    fromJSON(_: any): MsgDeleteDataInfoResponse;
    toJSON(_: MsgDeleteDataInfoResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteDataInfoResponse>): MsgDeleteDataInfoResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    SendIbcDataInfo(request: MsgSendIbcDataInfo): Promise<MsgSendIbcDataInfoResponse>;
    CreateDataInfo(request: MsgCreateDataInfo): Promise<MsgCreateDataInfoResponse>;
    UpdateDataInfo(request: MsgUpdateDataInfo): Promise<MsgUpdateDataInfoResponse>;
    DeleteDataInfo(request: MsgDeleteDataInfo): Promise<MsgDeleteDataInfoResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SendIbcDataInfo(request: MsgSendIbcDataInfo): Promise<MsgSendIbcDataInfoResponse>;
    CreateDataInfo(request: MsgCreateDataInfo): Promise<MsgCreateDataInfoResponse>;
    UpdateDataInfo(request: MsgUpdateDataInfo): Promise<MsgUpdateDataInfoResponse>;
    DeleteDataInfo(request: MsgDeleteDataInfo): Promise<MsgDeleteDataInfoResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
