/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { ReceiveData } from "../testsuit1/receiveData";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { DataInfo } from "../testsuit1/dataInfo";
export const protobufPackage = "user.chainb.testsuit1";
const baseQueryGetReceiveDataRequest = { index: "" };
export const QueryGetReceiveDataRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetReceiveDataRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetReceiveDataRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetReceiveDataRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetReceiveDataResponse = {};
export const QueryGetReceiveDataResponse = {
    encode(message, writer = Writer.create()) {
        if (message.ReceiveData !== undefined) {
            ReceiveData.encode(message.ReceiveData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetReceiveDataResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetReceiveDataResponse,
        };
        if (object.ReceiveData !== undefined && object.ReceiveData !== null) {
            message.ReceiveData = ReceiveData.fromJSON(object.ReceiveData);
        }
        else {
            message.ReceiveData = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ReceiveData !== undefined &&
            (obj.ReceiveData = message.ReceiveData
                ? ReceiveData.toJSON(message.ReceiveData)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetReceiveDataResponse,
        };
        if (object.ReceiveData !== undefined && object.ReceiveData !== null) {
            message.ReceiveData = ReceiveData.fromPartial(object.ReceiveData);
        }
        else {
            message.ReceiveData = undefined;
        }
        return message;
    },
};
const baseQueryAllReceiveDataRequest = {};
export const QueryAllReceiveDataRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllReceiveDataRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllReceiveDataRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllReceiveDataRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllReceiveDataResponse = {};
export const QueryAllReceiveDataResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.ReceiveData) {
            ReceiveData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllReceiveDataResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllReceiveDataResponse,
        };
        message.ReceiveData = [];
        if (object.ReceiveData !== undefined && object.ReceiveData !== null) {
            for (const e of object.ReceiveData) {
                message.ReceiveData.push(ReceiveData.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.ReceiveData) {
            obj.ReceiveData = message.ReceiveData.map((e) => e ? ReceiveData.toJSON(e) : undefined);
        }
        else {
            obj.ReceiveData = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllReceiveDataResponse,
        };
        message.ReceiveData = [];
        if (object.ReceiveData !== undefined && object.ReceiveData !== null) {
            for (const e of object.ReceiveData) {
                message.ReceiveData.push(ReceiveData.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetDataInfoRequest = { id: 0 };
export const QueryGetDataInfoRequest = {
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
            ...baseQueryGetDataInfoRequest,
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
            ...baseQueryGetDataInfoRequest,
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
            ...baseQueryGetDataInfoRequest,
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
const baseQueryGetDataInfoResponse = {};
export const QueryGetDataInfoResponse = {
    encode(message, writer = Writer.create()) {
        if (message.DataInfo !== undefined) {
            DataInfo.encode(message.DataInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetDataInfoResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetDataInfoResponse,
        };
        if (object.DataInfo !== undefined && object.DataInfo !== null) {
            message.DataInfo = DataInfo.fromJSON(object.DataInfo);
        }
        else {
            message.DataInfo = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.DataInfo !== undefined &&
            (obj.DataInfo = message.DataInfo
                ? DataInfo.toJSON(message.DataInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetDataInfoResponse,
        };
        if (object.DataInfo !== undefined && object.DataInfo !== null) {
            message.DataInfo = DataInfo.fromPartial(object.DataInfo);
        }
        else {
            message.DataInfo = undefined;
        }
        return message;
    },
};
const baseQueryAllDataInfoRequest = {};
export const QueryAllDataInfoRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllDataInfoRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllDataInfoRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllDataInfoRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllDataInfoResponse = {};
export const QueryAllDataInfoResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.DataInfo) {
            DataInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllDataInfoResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllDataInfoResponse,
        };
        message.DataInfo = [];
        if (object.DataInfo !== undefined && object.DataInfo !== null) {
            for (const e of object.DataInfo) {
                message.DataInfo.push(DataInfo.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.DataInfo) {
            obj.DataInfo = message.DataInfo.map((e) => e ? DataInfo.toJSON(e) : undefined);
        }
        else {
            obj.DataInfo = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllDataInfoResponse,
        };
        message.DataInfo = [];
        if (object.DataInfo !== undefined && object.DataInfo !== null) {
            for (const e of object.DataInfo) {
                message.DataInfo.push(DataInfo.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    ReceiveData(request) {
        const data = QueryGetReceiveDataRequest.encode(request).finish();
        const promise = this.rpc.request("user.chainb.testsuit1.Query", "ReceiveData", data);
        return promise.then((data) => QueryGetReceiveDataResponse.decode(new Reader(data)));
    }
    ReceiveDataAll(request) {
        const data = QueryAllReceiveDataRequest.encode(request).finish();
        const promise = this.rpc.request("user.chainb.testsuit1.Query", "ReceiveDataAll", data);
        return promise.then((data) => QueryAllReceiveDataResponse.decode(new Reader(data)));
    }
    DataInfo(request) {
        const data = QueryGetDataInfoRequest.encode(request).finish();
        const promise = this.rpc.request("user.chainb.testsuit1.Query", "DataInfo", data);
        return promise.then((data) => QueryGetDataInfoResponse.decode(new Reader(data)));
    }
    DataInfoAll(request) {
        const data = QueryAllDataInfoRequest.encode(request).finish();
        const promise = this.rpc.request("user.chainb.testsuit1.Query", "DataInfoAll", data);
        return promise.then((data) => QueryAllDataInfoResponse.decode(new Reader(data)));
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
