/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "user.chainb.testsuit1";

export interface Testsuit1PacketData {
  noData: NoData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  ibcDataInfoPacket: IbcDataInfoPacketData | undefined;
}

export interface NoData {}

/**
 * this line is used by starport scaffolding # ibc/packet/proto/message
 * IbcDataInfoPacketData defines a struct for the packet payload
 */
export interface IbcDataInfoPacketData {
  dataIndex: string;
  data: string;
}

/** IbcDataInfoPacketAck defines a struct for the packet acknowledgment */
export interface IbcDataInfoPacketAck {
  dataIndex: string;
}

const baseTestsuit1PacketData: object = {};

export const Testsuit1PacketData = {
  encode(
    message: Testsuit1PacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.ibcDataInfoPacket !== undefined) {
      IbcDataInfoPacketData.encode(
        message.ibcDataInfoPacket,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Testsuit1PacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTestsuit1PacketData } as Testsuit1PacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 2:
          message.ibcDataInfoPacket = IbcDataInfoPacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Testsuit1PacketData {
    const message = { ...baseTestsuit1PacketData } as Testsuit1PacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.ibcDataInfoPacket !== undefined &&
      object.ibcDataInfoPacket !== null
    ) {
      message.ibcDataInfoPacket = IbcDataInfoPacketData.fromJSON(
        object.ibcDataInfoPacket
      );
    } else {
      message.ibcDataInfoPacket = undefined;
    }
    return message;
  },

  toJSON(message: Testsuit1PacketData): unknown {
    const obj: any = {};
    message.noData !== undefined &&
      (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.ibcDataInfoPacket !== undefined &&
      (obj.ibcDataInfoPacket = message.ibcDataInfoPacket
        ? IbcDataInfoPacketData.toJSON(message.ibcDataInfoPacket)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Testsuit1PacketData>): Testsuit1PacketData {
    const message = { ...baseTestsuit1PacketData } as Testsuit1PacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.ibcDataInfoPacket !== undefined &&
      object.ibcDataInfoPacket !== null
    ) {
      message.ibcDataInfoPacket = IbcDataInfoPacketData.fromPartial(
        object.ibcDataInfoPacket
      );
    } else {
      message.ibcDataInfoPacket = undefined;
    }
    return message;
  },
};

const baseNoData: object = {};

export const NoData = {
  encode(_: NoData, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNoData } as NoData;
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

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },
};

const baseIbcDataInfoPacketData: object = { dataIndex: "", data: "" };

export const IbcDataInfoPacketData = {
  encode(
    message: IbcDataInfoPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.dataIndex !== "") {
      writer.uint32(10).string(message.dataIndex);
    }
    if (message.data !== "") {
      writer.uint32(18).string(message.data);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): IbcDataInfoPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIbcDataInfoPacketData } as IbcDataInfoPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataIndex = reader.string();
          break;
        case 2:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IbcDataInfoPacketData {
    const message = { ...baseIbcDataInfoPacketData } as IbcDataInfoPacketData;
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

  toJSON(message: IbcDataInfoPacketData): unknown {
    const obj: any = {};
    message.dataIndex !== undefined && (obj.dataIndex = message.dataIndex);
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IbcDataInfoPacketData>
  ): IbcDataInfoPacketData {
    const message = { ...baseIbcDataInfoPacketData } as IbcDataInfoPacketData;
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

const baseIbcDataInfoPacketAck: object = { dataIndex: "" };

export const IbcDataInfoPacketAck = {
  encode(
    message: IbcDataInfoPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.dataIndex !== "") {
      writer.uint32(10).string(message.dataIndex);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): IbcDataInfoPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIbcDataInfoPacketAck } as IbcDataInfoPacketAck;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IbcDataInfoPacketAck {
    const message = { ...baseIbcDataInfoPacketAck } as IbcDataInfoPacketAck;
    if (object.dataIndex !== undefined && object.dataIndex !== null) {
      message.dataIndex = String(object.dataIndex);
    } else {
      message.dataIndex = "";
    }
    return message;
  },

  toJSON(message: IbcDataInfoPacketAck): unknown {
    const obj: any = {};
    message.dataIndex !== undefined && (obj.dataIndex = message.dataIndex);
    return obj;
  },

  fromPartial(object: DeepPartial<IbcDataInfoPacketAck>): IbcDataInfoPacketAck {
    const message = { ...baseIbcDataInfoPacketAck } as IbcDataInfoPacketAck;
    if (object.dataIndex !== undefined && object.dataIndex !== null) {
      message.dataIndex = object.dataIndex;
    } else {
      message.dataIndex = "";
    }
    return message;
  },
};

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
