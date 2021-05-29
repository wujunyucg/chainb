/* eslint-disable */
import { ReceiveData } from "../testsuit1/receiveData";
import { DataInfo } from "../testsuit1/dataInfo";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "user.chainb.testsuit1";
const baseGenesisState = { portId: "" };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.receiveDataList) {
            ReceiveData.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.dataInfoList) {
            DataInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.receiveDataList = [];
        message.dataInfoList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.receiveDataList.push(ReceiveData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.dataInfoList.push(DataInfo.decode(reader, reader.uint32()));
                    break;
                case 1:
                    message.portId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.receiveDataList = [];
        message.dataInfoList = [];
        if (object.receiveDataList !== undefined &&
            object.receiveDataList !== null) {
            for (const e of object.receiveDataList) {
                message.receiveDataList.push(ReceiveData.fromJSON(e));
            }
        }
        if (object.dataInfoList !== undefined && object.dataInfoList !== null) {
            for (const e of object.dataInfoList) {
                message.dataInfoList.push(DataInfo.fromJSON(e));
            }
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = String(object.portId);
        }
        else {
            message.portId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.receiveDataList) {
            obj.receiveDataList = message.receiveDataList.map((e) => e ? ReceiveData.toJSON(e) : undefined);
        }
        else {
            obj.receiveDataList = [];
        }
        if (message.dataInfoList) {
            obj.dataInfoList = message.dataInfoList.map((e) => e ? DataInfo.toJSON(e) : undefined);
        }
        else {
            obj.dataInfoList = [];
        }
        message.portId !== undefined && (obj.portId = message.portId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.receiveDataList = [];
        message.dataInfoList = [];
        if (object.receiveDataList !== undefined &&
            object.receiveDataList !== null) {
            for (const e of object.receiveDataList) {
                message.receiveDataList.push(ReceiveData.fromPartial(e));
            }
        }
        if (object.dataInfoList !== undefined && object.dataInfoList !== null) {
            for (const e of object.dataInfoList) {
                message.dataInfoList.push(DataInfo.fromPartial(e));
            }
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = object.portId;
        }
        else {
            message.portId = "";
        }
        return message;
    },
};
