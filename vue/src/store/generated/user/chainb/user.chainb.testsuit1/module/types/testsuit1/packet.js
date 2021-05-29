/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "user.chainb.testsuit1";
const baseTestsuit1PacketData = {};
export const Testsuit1PacketData = {
    encode(message, writer = Writer.create()) {
        if (message.noData !== undefined) {
            NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
        }
        if (message.ibcDataInfoPacket !== undefined) {
            IbcDataInfoPacketData.encode(message.ibcDataInfoPacket, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTestsuit1PacketData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.noData = NoData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ibcDataInfoPacket = IbcDataInfoPacketData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTestsuit1PacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromJSON(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.ibcDataInfoPacket !== undefined &&
            object.ibcDataInfoPacket !== null) {
            message.ibcDataInfoPacket = IbcDataInfoPacketData.fromJSON(object.ibcDataInfoPacket);
        }
        else {
            message.ibcDataInfoPacket = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.noData !== undefined &&
            (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
        message.ibcDataInfoPacket !== undefined &&
            (obj.ibcDataInfoPacket = message.ibcDataInfoPacket
                ? IbcDataInfoPacketData.toJSON(message.ibcDataInfoPacket)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTestsuit1PacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromPartial(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.ibcDataInfoPacket !== undefined &&
            object.ibcDataInfoPacket !== null) {
            message.ibcDataInfoPacket = IbcDataInfoPacketData.fromPartial(object.ibcDataInfoPacket);
        }
        else {
            message.ibcDataInfoPacket = undefined;
        }
        return message;
    },
};
const baseNoData = {};
export const NoData = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNoData };
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
    fromJSON(_) {
        const message = { ...baseNoData };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseNoData };
        return message;
    },
};
const baseIbcDataInfoPacketData = { dataIndex: "", data: "" };
export const IbcDataInfoPacketData = {
    encode(message, writer = Writer.create()) {
        if (message.dataIndex !== "") {
            writer.uint32(10).string(message.dataIndex);
        }
        if (message.data !== "") {
            writer.uint32(18).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIbcDataInfoPacketData };
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
    fromJSON(object) {
        const message = { ...baseIbcDataInfoPacketData };
        if (object.dataIndex !== undefined && object.dataIndex !== null) {
            message.dataIndex = String(object.dataIndex);
        }
        else {
            message.dataIndex = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = String(object.data);
        }
        else {
            message.data = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dataIndex !== undefined && (obj.dataIndex = message.dataIndex);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIbcDataInfoPacketData };
        if (object.dataIndex !== undefined && object.dataIndex !== null) {
            message.dataIndex = object.dataIndex;
        }
        else {
            message.dataIndex = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = "";
        }
        return message;
    },
};
const baseIbcDataInfoPacketAck = { dataIndex: "" };
export const IbcDataInfoPacketAck = {
    encode(message, writer = Writer.create()) {
        if (message.dataIndex !== "") {
            writer.uint32(10).string(message.dataIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIbcDataInfoPacketAck };
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
    fromJSON(object) {
        const message = { ...baseIbcDataInfoPacketAck };
        if (object.dataIndex !== undefined && object.dataIndex !== null) {
            message.dataIndex = String(object.dataIndex);
        }
        else {
            message.dataIndex = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dataIndex !== undefined && (obj.dataIndex = message.dataIndex);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIbcDataInfoPacketAck };
        if (object.dataIndex !== undefined && object.dataIndex !== null) {
            message.dataIndex = object.dataIndex;
        }
        else {
            message.dataIndex = "";
        }
        return message;
    },
};
