/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "user.chainb.testsuit1";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgSendIbcDataInfo {
  sender: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  dataIndex: string;
  data: string;
}

export interface MsgSendIbcDataInfoResponse {}

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

export interface MsgUpdateDataInfoResponse {}

export interface MsgDeleteDataInfo {
  creator: string;
  id: number;
}

export interface MsgDeleteDataInfoResponse {}

const baseMsgSendIbcDataInfo: object = {
  sender: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  dataIndex: "",
  data: "",
};

export const MsgSendIbcDataInfo = {
  encode(
    message: MsgSendIbcDataInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.dataIndex !== "") {
      writer.uint32(42).string(message.dataIndex);
    }
    if (message.data !== "") {
      writer.uint32(50).string(message.data);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendIbcDataInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendIbcDataInfo } as MsgSendIbcDataInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.dataIndex = reader.string();
          break;
        case 6:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendIbcDataInfo {
    const message = { ...baseMsgSendIbcDataInfo } as MsgSendIbcDataInfo;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.dataIndex !== undefined && object.dataIndex !== null) {
      message.dataIndex = String(object.dataIndex);
    } else {
      message.dataIndex = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    return message;
  },

  toJSON(message: MsgSendIbcDataInfo): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.dataIndex !== undefined && (obj.dataIndex = message.dataIndex);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendIbcDataInfo>): MsgSendIbcDataInfo {
    const message = { ...baseMsgSendIbcDataInfo } as MsgSendIbcDataInfo;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.dataIndex !== undefined && object.dataIndex !== null) {
      message.dataIndex = object.dataIndex;
    } else {
      message.dataIndex = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    return message;
  },
};

const baseMsgSendIbcDataInfoResponse: object = {};

export const MsgSendIbcDataInfoResponse = {
  encode(
    _: MsgSendIbcDataInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendIbcDataInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendIbcDataInfoResponse,
    } as MsgSendIbcDataInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendIbcDataInfoResponse {
    const message = {
      ...baseMsgSendIbcDataInfoResponse,
    } as MsgSendIbcDataInfoResponse;
    return message;
  },

  toJSON(_: MsgSendIbcDataInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendIbcDataInfoResponse>
  ): MsgSendIbcDataInfoResponse {
    const message = {
      ...baseMsgSendIbcDataInfoResponse,
    } as MsgSendIbcDataInfoResponse;
    return message;
  },
};

const baseMsgCreateDataInfo: object = { creator: "", dataIndex: "", data: "" };

export const MsgCreateDataInfo = {
  encode(message: MsgCreateDataInfo, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.dataIndex !== "") {
      writer.uint32(18).string(message.dataIndex);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDataInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDataInfo } as MsgCreateDataInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.dataIndex = reader.string();
          break;
        case 3:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDataInfo {
    const message = { ...baseMsgCreateDataInfo } as MsgCreateDataInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.dataIndex !== undefined && object.dataIndex !== null) {
      message.dataIndex = String(object.dataIndex);
    } else {
      message.dataIndex = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    return message;
  },

  toJSON(message: MsgCreateDataInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.dataIndex !== undefined && (obj.dataIndex = message.dataIndex);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDataInfo>): MsgCreateDataInfo {
    const message = { ...baseMsgCreateDataInfo } as MsgCreateDataInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.dataIndex !== undefined && object.dataIndex !== null) {
      message.dataIndex = object.dataIndex;
    } else {
      message.dataIndex = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    return message;
  },
};

const baseMsgCreateDataInfoResponse: object = { id: 0 };

export const MsgCreateDataInfoResponse = {
  encode(
    message: MsgCreateDataInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDataInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDataInfoResponse,
    } as MsgCreateDataInfoResponse;
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

  fromJSON(object: any): MsgCreateDataInfoResponse {
    const message = {
      ...baseMsgCreateDataInfoResponse,
    } as MsgCreateDataInfoResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDataInfoResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDataInfoResponse>
  ): MsgCreateDataInfoResponse {
    const message = {
      ...baseMsgCreateDataInfoResponse,
    } as MsgCreateDataInfoResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateDataInfo: object = {
  creator: "",
  id: 0,
  dataIndex: "",
  data: "",
};

export const MsgUpdateDataInfo = {
  encode(message: MsgUpdateDataInfo, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.dataIndex !== "") {
      writer.uint32(26).string(message.dataIndex);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDataInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateDataInfo } as MsgUpdateDataInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.dataIndex = reader.string();
          break;
        case 4:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDataInfo {
    const message = { ...baseMsgUpdateDataInfo } as MsgUpdateDataInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.dataIndex !== undefined && object.dataIndex !== null) {
      message.dataIndex = String(object.dataIndex);
    } else {
      message.dataIndex = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateDataInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.dataIndex !== undefined && (obj.dataIndex = message.dataIndex);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateDataInfo>): MsgUpdateDataInfo {
    const message = { ...baseMsgUpdateDataInfo } as MsgUpdateDataInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.dataIndex !== undefined && object.dataIndex !== null) {
      message.dataIndex = object.dataIndex;
    } else {
      message.dataIndex = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    return message;
  },
};

const baseMsgUpdateDataInfoResponse: object = {};

export const MsgUpdateDataInfoResponse = {
  encode(
    _: MsgUpdateDataInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDataInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDataInfoResponse,
    } as MsgUpdateDataInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateDataInfoResponse {
    const message = {
      ...baseMsgUpdateDataInfoResponse,
    } as MsgUpdateDataInfoResponse;
    return message;
  },

  toJSON(_: MsgUpdateDataInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDataInfoResponse>
  ): MsgUpdateDataInfoResponse {
    const message = {
      ...baseMsgUpdateDataInfoResponse,
    } as MsgUpdateDataInfoResponse;
    return message;
  },
};

const baseMsgDeleteDataInfo: object = { creator: "", id: 0 };

export const MsgDeleteDataInfo = {
  encode(message: MsgDeleteDataInfo, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDataInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteDataInfo } as MsgDeleteDataInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDataInfo {
    const message = { ...baseMsgDeleteDataInfo } as MsgDeleteDataInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteDataInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteDataInfo>): MsgDeleteDataInfo {
    const message = { ...baseMsgDeleteDataInfo } as MsgDeleteDataInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteDataInfoResponse: object = {};

export const MsgDeleteDataInfoResponse = {
  encode(
    _: MsgDeleteDataInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDataInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDataInfoResponse,
    } as MsgDeleteDataInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteDataInfoResponse {
    const message = {
      ...baseMsgDeleteDataInfoResponse,
    } as MsgDeleteDataInfoResponse;
    return message;
  },

  toJSON(_: MsgDeleteDataInfoResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDataInfoResponse>
  ): MsgDeleteDataInfoResponse {
    const message = {
      ...baseMsgDeleteDataInfoResponse,
    } as MsgDeleteDataInfoResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendIbcDataInfo(
    request: MsgSendIbcDataInfo
  ): Promise<MsgSendIbcDataInfoResponse>;
  CreateDataInfo(
    request: MsgCreateDataInfo
  ): Promise<MsgCreateDataInfoResponse>;
  UpdateDataInfo(
    request: MsgUpdateDataInfo
  ): Promise<MsgUpdateDataInfoResponse>;
  DeleteDataInfo(
    request: MsgDeleteDataInfo
  ): Promise<MsgDeleteDataInfoResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SendIbcDataInfo(
    request: MsgSendIbcDataInfo
  ): Promise<MsgSendIbcDataInfoResponse> {
    const data = MsgSendIbcDataInfo.encode(request).finish();
    const promise = this.rpc.request(
      "user.chainb.testsuit1.Msg",
      "SendIbcDataInfo",
      data
    );
    return promise.then((data) =>
      MsgSendIbcDataInfoResponse.decode(new Reader(data))
    );
  }

  CreateDataInfo(
    request: MsgCreateDataInfo
  ): Promise<MsgCreateDataInfoResponse> {
    const data = MsgCreateDataInfo.encode(request).finish();
    const promise = this.rpc.request(
      "user.chainb.testsuit1.Msg",
      "CreateDataInfo",
      data
    );
    return promise.then((data) =>
      MsgCreateDataInfoResponse.decode(new Reader(data))
    );
  }

  UpdateDataInfo(
    request: MsgUpdateDataInfo
  ): Promise<MsgUpdateDataInfoResponse> {
    const data = MsgUpdateDataInfo.encode(request).finish();
    const promise = this.rpc.request(
      "user.chainb.testsuit1.Msg",
      "UpdateDataInfo",
      data
    );
    return promise.then((data) =>
      MsgUpdateDataInfoResponse.decode(new Reader(data))
    );
  }

  DeleteDataInfo(
    request: MsgDeleteDataInfo
  ): Promise<MsgDeleteDataInfoResponse> {
    const data = MsgDeleteDataInfo.encode(request).finish();
    const promise = this.rpc.request(
      "user.chainb.testsuit1.Msg",
      "DeleteDataInfo",
      data
    );
    return promise.then((data) =>
      MsgDeleteDataInfoResponse.decode(new Reader(data))
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
