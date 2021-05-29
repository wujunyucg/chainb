/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { ReceiveData } from "../testsuit1/receiveData";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { DataInfo } from "../testsuit1/dataInfo";

export const protobufPackage = "user.chainb.testsuit1";

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

const baseQueryGetReceiveDataRequest: object = { index: "" };

export const QueryGetReceiveDataRequest = {
  encode(
    message: QueryGetReceiveDataRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetReceiveDataRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetReceiveDataRequest,
    } as QueryGetReceiveDataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetReceiveDataRequest {
    const message = {
      ...baseQueryGetReceiveDataRequest,
    } as QueryGetReceiveDataRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetReceiveDataRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetReceiveDataRequest>
  ): QueryGetReceiveDataRequest {
    const message = {
      ...baseQueryGetReceiveDataRequest,
    } as QueryGetReceiveDataRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetReceiveDataResponse: object = {};

export const QueryGetReceiveDataResponse = {
  encode(
    message: QueryGetReceiveDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ReceiveData !== undefined) {
      ReceiveData.encode(
        message.ReceiveData,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetReceiveDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetReceiveDataResponse,
    } as QueryGetReceiveDataResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ReceiveData = ReceiveData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetReceiveDataResponse {
    const message = {
      ...baseQueryGetReceiveDataResponse,
    } as QueryGetReceiveDataResponse;
    if (object.ReceiveData !== undefined && object.ReceiveData !== null) {
      message.ReceiveData = ReceiveData.fromJSON(object.ReceiveData);
    } else {
      message.ReceiveData = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetReceiveDataResponse): unknown {
    const obj: any = {};
    message.ReceiveData !== undefined &&
      (obj.ReceiveData = message.ReceiveData
        ? ReceiveData.toJSON(message.ReceiveData)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetReceiveDataResponse>
  ): QueryGetReceiveDataResponse {
    const message = {
      ...baseQueryGetReceiveDataResponse,
    } as QueryGetReceiveDataResponse;
    if (object.ReceiveData !== undefined && object.ReceiveData !== null) {
      message.ReceiveData = ReceiveData.fromPartial(object.ReceiveData);
    } else {
      message.ReceiveData = undefined;
    }
    return message;
  },
};

const baseQueryAllReceiveDataRequest: object = {};

export const QueryAllReceiveDataRequest = {
  encode(
    message: QueryAllReceiveDataRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllReceiveDataRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllReceiveDataRequest,
    } as QueryAllReceiveDataRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllReceiveDataRequest {
    const message = {
      ...baseQueryAllReceiveDataRequest,
    } as QueryAllReceiveDataRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllReceiveDataRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllReceiveDataRequest>
  ): QueryAllReceiveDataRequest {
    const message = {
      ...baseQueryAllReceiveDataRequest,
    } as QueryAllReceiveDataRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllReceiveDataResponse: object = {};

export const QueryAllReceiveDataResponse = {
  encode(
    message: QueryAllReceiveDataResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.ReceiveData) {
      ReceiveData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllReceiveDataResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllReceiveDataResponse,
    } as QueryAllReceiveDataResponse;
    message.ReceiveData = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ReceiveData.push(ReceiveData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllReceiveDataResponse {
    const message = {
      ...baseQueryAllReceiveDataResponse,
    } as QueryAllReceiveDataResponse;
    message.ReceiveData = [];
    if (object.ReceiveData !== undefined && object.ReceiveData !== null) {
      for (const e of object.ReceiveData) {
        message.ReceiveData.push(ReceiveData.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllReceiveDataResponse): unknown {
    const obj: any = {};
    if (message.ReceiveData) {
      obj.ReceiveData = message.ReceiveData.map((e) =>
        e ? ReceiveData.toJSON(e) : undefined
      );
    } else {
      obj.ReceiveData = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllReceiveDataResponse>
  ): QueryAllReceiveDataResponse {
    const message = {
      ...baseQueryAllReceiveDataResponse,
    } as QueryAllReceiveDataResponse;
    message.ReceiveData = [];
    if (object.ReceiveData !== undefined && object.ReceiveData !== null) {
      for (const e of object.ReceiveData) {
        message.ReceiveData.push(ReceiveData.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetDataInfoRequest: object = { id: 0 };

export const QueryGetDataInfoRequest = {
  encode(
    message: QueryGetDataInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDataInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDataInfoRequest,
    } as QueryGetDataInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDataInfoRequest {
    const message = {
      ...baseQueryGetDataInfoRequest,
    } as QueryGetDataInfoRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetDataInfoRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDataInfoRequest>
  ): QueryGetDataInfoRequest {
    const message = {
      ...baseQueryGetDataInfoRequest,
    } as QueryGetDataInfoRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetDataInfoResponse: object = {};

export const QueryGetDataInfoResponse = {
  encode(
    message: QueryGetDataInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.DataInfo !== undefined) {
      DataInfo.encode(message.DataInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDataInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDataInfoResponse,
    } as QueryGetDataInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DataInfo = DataInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDataInfoResponse {
    const message = {
      ...baseQueryGetDataInfoResponse,
    } as QueryGetDataInfoResponse;
    if (object.DataInfo !== undefined && object.DataInfo !== null) {
      message.DataInfo = DataInfo.fromJSON(object.DataInfo);
    } else {
      message.DataInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDataInfoResponse): unknown {
    const obj: any = {};
    message.DataInfo !== undefined &&
      (obj.DataInfo = message.DataInfo
        ? DataInfo.toJSON(message.DataInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDataInfoResponse>
  ): QueryGetDataInfoResponse {
    const message = {
      ...baseQueryGetDataInfoResponse,
    } as QueryGetDataInfoResponse;
    if (object.DataInfo !== undefined && object.DataInfo !== null) {
      message.DataInfo = DataInfo.fromPartial(object.DataInfo);
    } else {
      message.DataInfo = undefined;
    }
    return message;
  },
};

const baseQueryAllDataInfoRequest: object = {};

export const QueryAllDataInfoRequest = {
  encode(
    message: QueryAllDataInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDataInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDataInfoRequest,
    } as QueryAllDataInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDataInfoRequest {
    const message = {
      ...baseQueryAllDataInfoRequest,
    } as QueryAllDataInfoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDataInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDataInfoRequest>
  ): QueryAllDataInfoRequest {
    const message = {
      ...baseQueryAllDataInfoRequest,
    } as QueryAllDataInfoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDataInfoResponse: object = {};

export const QueryAllDataInfoResponse = {
  encode(
    message: QueryAllDataInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.DataInfo) {
      DataInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDataInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDataInfoResponse,
    } as QueryAllDataInfoResponse;
    message.DataInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DataInfo.push(DataInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDataInfoResponse {
    const message = {
      ...baseQueryAllDataInfoResponse,
    } as QueryAllDataInfoResponse;
    message.DataInfo = [];
    if (object.DataInfo !== undefined && object.DataInfo !== null) {
      for (const e of object.DataInfo) {
        message.DataInfo.push(DataInfo.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDataInfoResponse): unknown {
    const obj: any = {};
    if (message.DataInfo) {
      obj.DataInfo = message.DataInfo.map((e) =>
        e ? DataInfo.toJSON(e) : undefined
      );
    } else {
      obj.DataInfo = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDataInfoResponse>
  ): QueryAllDataInfoResponse {
    const message = {
      ...baseQueryAllDataInfoResponse,
    } as QueryAllDataInfoResponse;
    message.DataInfo = [];
    if (object.DataInfo !== undefined && object.DataInfo !== null) {
      for (const e of object.DataInfo) {
        message.DataInfo.push(DataInfo.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  ReceiveData(
    request: QueryGetReceiveDataRequest
  ): Promise<QueryGetReceiveDataResponse>;
  ReceiveDataAll(
    request: QueryAllReceiveDataRequest
  ): Promise<QueryAllReceiveDataResponse>;
  DataInfo(request: QueryGetDataInfoRequest): Promise<QueryGetDataInfoResponse>;
  DataInfoAll(
    request: QueryAllDataInfoRequest
  ): Promise<QueryAllDataInfoResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  ReceiveData(
    request: QueryGetReceiveDataRequest
  ): Promise<QueryGetReceiveDataResponse> {
    const data = QueryGetReceiveDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "user.chainb.testsuit1.Query",
      "ReceiveData",
      data
    );
    return promise.then((data) =>
      QueryGetReceiveDataResponse.decode(new Reader(data))
    );
  }

  ReceiveDataAll(
    request: QueryAllReceiveDataRequest
  ): Promise<QueryAllReceiveDataResponse> {
    const data = QueryAllReceiveDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "user.chainb.testsuit1.Query",
      "ReceiveDataAll",
      data
    );
    return promise.then((data) =>
      QueryAllReceiveDataResponse.decode(new Reader(data))
    );
  }

  DataInfo(
    request: QueryGetDataInfoRequest
  ): Promise<QueryGetDataInfoResponse> {
    const data = QueryGetDataInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "user.chainb.testsuit1.Query",
      "DataInfo",
      data
    );
    return promise.then((data) =>
      QueryGetDataInfoResponse.decode(new Reader(data))
    );
  }

  DataInfoAll(
    request: QueryAllDataInfoRequest
  ): Promise<QueryAllDataInfoResponse> {
    const data = QueryAllDataInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "user.chainb.testsuit1.Query",
      "DataInfoAll",
      data
    );
    return promise.then((data) =>
      QueryAllDataInfoResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
