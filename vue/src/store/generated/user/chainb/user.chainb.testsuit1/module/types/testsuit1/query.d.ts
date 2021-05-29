import { Reader, Writer } from "protobufjs/minimal";
import { ReceiveData } from "../testsuit1/receiveData";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { DataInfo } from "../testsuit1/dataInfo";
export declare const protobufPackage = "user.chainb.testsuit1";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetReceiveDataRequest {
    index: string;
}
export interface QueryGetReceiveDataResponse {
    ReceiveData: ReceiveData | undefined;
}
export interface QueryAllReceiveDataRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllReceiveDataResponse {
    ReceiveData: ReceiveData[];
    pagination: PageResponse | undefined;
}
export interface QueryGetDataInfoRequest {
    id: number;
}
export interface QueryGetDataInfoResponse {
    DataInfo: DataInfo | undefined;
}
export interface QueryAllDataInfoRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllDataInfoResponse {
    DataInfo: DataInfo[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetReceiveDataRequest: {
    encode(message: QueryGetReceiveDataRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetReceiveDataRequest;
    fromJSON(object: any): QueryGetReceiveDataRequest;
    toJSON(message: QueryGetReceiveDataRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetReceiveDataRequest>): QueryGetReceiveDataRequest;
};
export declare const QueryGetReceiveDataResponse: {
    encode(message: QueryGetReceiveDataResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetReceiveDataResponse;
    fromJSON(object: any): QueryGetReceiveDataResponse;
    toJSON(message: QueryGetReceiveDataResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetReceiveDataResponse>): QueryGetReceiveDataResponse;
};
export declare const QueryAllReceiveDataRequest: {
    encode(message: QueryAllReceiveDataRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllReceiveDataRequest;
    fromJSON(object: any): QueryAllReceiveDataRequest;
    toJSON(message: QueryAllReceiveDataRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllReceiveDataRequest>): QueryAllReceiveDataRequest;
};
export declare const QueryAllReceiveDataResponse: {
    encode(message: QueryAllReceiveDataResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllReceiveDataResponse;
    fromJSON(object: any): QueryAllReceiveDataResponse;
    toJSON(message: QueryAllReceiveDataResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllReceiveDataResponse>): QueryAllReceiveDataResponse;
};
export declare const QueryGetDataInfoRequest: {
    encode(message: QueryGetDataInfoRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDataInfoRequest;
    fromJSON(object: any): QueryGetDataInfoRequest;
    toJSON(message: QueryGetDataInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetDataInfoRequest>): QueryGetDataInfoRequest;
};
export declare const QueryGetDataInfoResponse: {
    encode(message: QueryGetDataInfoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDataInfoResponse;
    fromJSON(object: any): QueryGetDataInfoResponse;
    toJSON(message: QueryGetDataInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetDataInfoResponse>): QueryGetDataInfoResponse;
};
export declare const QueryAllDataInfoRequest: {
    encode(message: QueryAllDataInfoRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDataInfoRequest;
    fromJSON(object: any): QueryAllDataInfoRequest;
    toJSON(message: QueryAllDataInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllDataInfoRequest>): QueryAllDataInfoRequest;
};
export declare const QueryAllDataInfoResponse: {
    encode(message: QueryAllDataInfoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDataInfoResponse;
    fromJSON(object: any): QueryAllDataInfoResponse;
    toJSON(message: QueryAllDataInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllDataInfoResponse>): QueryAllDataInfoResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    ReceiveData(request: QueryGetReceiveDataRequest): Promise<QueryGetReceiveDataResponse>;
    ReceiveDataAll(request: QueryAllReceiveDataRequest): Promise<QueryAllReceiveDataResponse>;
    DataInfo(request: QueryGetDataInfoRequest): Promise<QueryGetDataInfoResponse>;
    DataInfoAll(request: QueryAllDataInfoRequest): Promise<QueryAllDataInfoResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ReceiveData(request: QueryGetReceiveDataRequest): Promise<QueryGetReceiveDataResponse>;
    ReceiveDataAll(request: QueryAllReceiveDataRequest): Promise<QueryAllReceiveDataResponse>;
    DataInfo(request: QueryGetDataInfoRequest): Promise<QueryGetDataInfoResponse>;
    DataInfoAll(request: QueryAllDataInfoRequest): Promise<QueryAllDataInfoResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
