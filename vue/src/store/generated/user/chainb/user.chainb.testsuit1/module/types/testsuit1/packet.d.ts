import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "user.chainb.testsuit1";
export interface Testsuit1PacketData {
    noData: NoData | undefined;
    /** this line is used by starport scaffolding # ibc/packet/proto/field */
    ibcDataInfoPacket: IbcDataInfoPacketData | undefined;
}
export interface NoData {
}
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
export declare const Testsuit1PacketData: {
    encode(message: Testsuit1PacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Testsuit1PacketData;
    fromJSON(object: any): Testsuit1PacketData;
    toJSON(message: Testsuit1PacketData): unknown;
    fromPartial(object: DeepPartial<Testsuit1PacketData>): Testsuit1PacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): NoData;
    fromJSON(_: any): NoData;
    toJSON(_: NoData): unknown;
    fromPartial(_: DeepPartial<NoData>): NoData;
};
export declare const IbcDataInfoPacketData: {
    encode(message: IbcDataInfoPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IbcDataInfoPacketData;
    fromJSON(object: any): IbcDataInfoPacketData;
    toJSON(message: IbcDataInfoPacketData): unknown;
    fromPartial(object: DeepPartial<IbcDataInfoPacketData>): IbcDataInfoPacketData;
};
export declare const IbcDataInfoPacketAck: {
    encode(message: IbcDataInfoPacketAck, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IbcDataInfoPacketAck;
    fromJSON(object: any): IbcDataInfoPacketAck;
    toJSON(message: IbcDataInfoPacketAck): unknown;
    fromPartial(object: DeepPartial<IbcDataInfoPacketAck>): IbcDataInfoPacketAck;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
