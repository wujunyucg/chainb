/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "user.chainb.testsuit1";
const baseMsgSendIbcDataInfo = {
    sender: "",
    port: "",
    channelID: "",
    timeoutTimestamp: 0,
    dataIndex: "",
    data: "",
};
export const MsgSendIbcDataInfo = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendIbcDataInfo };
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
                    message.timeoutTimestamp = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgSendIbcDataInfo };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = String(object.port);
        }
        else {
            message.port = "";
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = String(object.channelID);
        }
        else {
            message.channelID = "";
        }
        if (object.timeoutTimestamp !== undefined &&
            object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = Number(object.timeoutTimestamp);
        }
        else {
            message.timeoutTimestamp = 0;
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.port !== undefined && (obj.port = message.port);
        message.channelID !== undefined && (obj.channelID = message.channelID);
        message.timeoutTimestamp !== undefined &&
            (obj.timeoutTimestamp = message.timeoutTimestamp);
        message.dataIndex !== undefined && (obj.dataIndex = message.dataIndex);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSendIbcDataInfo };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = "";
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = object.channelID;
        }
        else {
            message.channelID = "";
        }
        if (object.timeoutTimestamp !== undefined &&
            object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = object.timeoutTimestamp;
        }
        else {
            message.timeoutTimestamp = 0;
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
        return message;
    },
};
const baseMsgSendIbcDataInfoResponse = {};
export const MsgSendIbcDataInfoResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgSendIbcDataInfoResponse,
        };
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
        const message = {
            ...baseMsgSendIbcDataInfoResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgSendIbcDataInfoResponse,
        };
        return message;
    },
};
const baseMsgCreateDataInfo = { creator: "", dataIndex: "", data: "" };
export const MsgCreateDataInfo = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateDataInfo };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateDataInfo };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.dataIndex !== undefined && (obj.dataIndex = message.dataIndex);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateDataInfo };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
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
        return message;
    },
};
const baseMsgCreateDataInfoResponse = { id: 0 };
export const MsgCreateDataInfoResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateDataInfoResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCreateDataInfoResponse,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateDataInfoResponse,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdateDataInfo = {
    creator: "",
    id: 0,
    dataIndex: "",
    data: "",
};
export const MsgUpdateDataInfo = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateDataInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateDataInfo };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.dataIndex !== undefined && (obj.dataIndex = message.dataIndex);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateDataInfo };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
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
        return message;
    },
};
const baseMsgUpdateDataInfoResponse = {};
export const MsgUpdateDataInfoResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateDataInfoResponse,
        };
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
        const message = {
            ...baseMsgUpdateDataInfoResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateDataInfoResponse,
        };
        return message;
    },
};
const baseMsgDeleteDataInfo = { creator: "", id: 0 };
export const MsgDeleteDataInfo = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteDataInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteDataInfo };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteDataInfo };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeleteDataInfoResponse = {};
export const MsgDeleteDataInfoResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteDataInfoResponse,
        };
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
        const message = {
            ...baseMsgDeleteDataInfoResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteDataInfoResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    SendIbcDataInfo(request) {
        const data = MsgSendIbcDataInfo.encode(request).finish();
        const promise = this.rpc.request("user.chainb.testsuit1.Msg", "SendIbcDataInfo", data);
        return promise.then((data) => MsgSendIbcDataInfoResponse.decode(new Reader(data)));
    }
    CreateDataInfo(request) {
        const data = MsgCreateDataInfo.encode(request).finish();
        const promise = this.rpc.request("user.chainb.testsuit1.Msg", "CreateDataInfo", data);
        return promise.then((data) => MsgCreateDataInfoResponse.decode(new Reader(data)));
    }
    UpdateDataInfo(request) {
        const data = MsgUpdateDataInfo.encode(request).finish();
        const promise = this.rpc.request("user.chainb.testsuit1.Msg", "UpdateDataInfo", data);
        return promise.then((data) => MsgUpdateDataInfoResponse.decode(new Reader(data)));
    }
    DeleteDataInfo(request) {
        const data = MsgDeleteDataInfo.encode(request).finish();
        const promise = this.rpc.request("user.chainb.testsuit1.Msg", "DeleteDataInfo", data);
        return promise.then((data) => MsgDeleteDataInfoResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
