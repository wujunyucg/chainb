/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "user.chainb.testsuit1";
const baseReceiveData = {
    index: "",
    dataIndex: "",
    data: "",
    chain: "",
};
export const ReceiveData = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.dataIndex !== "") {
            writer.uint32(26).string(message.dataIndex);
        }
        if (message.data !== "") {
            writer.uint32(34).string(message.data);
        }
        if (message.chain !== "") {
            writer.uint32(42).string(message.chain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReceiveData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.dataIndex = reader.string();
                    break;
                case 4:
                    message.data = reader.string();
                    break;
                case 5:
                    message.chain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseReceiveData };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
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
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = String(object.chain);
        }
        else {
            message.chain = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.dataIndex !== undefined && (obj.dataIndex = message.dataIndex);
        message.data !== undefined && (obj.data = message.data);
        message.chain !== undefined && (obj.chain = message.chain);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseReceiveData };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
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
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        else {
            message.chain = "";
        }
        return message;
    },
};
