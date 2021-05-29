// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteDataInfo } from "./types/testsuit1/tx";
import { MsgSendIbcDataInfo } from "./types/testsuit1/tx";
import { MsgCreateDataInfo } from "./types/testsuit1/tx";
import { MsgUpdateDataInfo } from "./types/testsuit1/tx";
const types = [
    ["/user.chainb.testsuit1.MsgDeleteDataInfo", MsgDeleteDataInfo],
    ["/user.chainb.testsuit1.MsgSendIbcDataInfo", MsgSendIbcDataInfo],
    ["/user.chainb.testsuit1.MsgCreateDataInfo", MsgCreateDataInfo],
    ["/user.chainb.testsuit1.MsgUpdateDataInfo", MsgUpdateDataInfo],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgDeleteDataInfo: (data) => ({ typeUrl: "/user.chainb.testsuit1.MsgDeleteDataInfo", value: data }),
        msgSendIbcDataInfo: (data) => ({ typeUrl: "/user.chainb.testsuit1.MsgSendIbcDataInfo", value: data }),
        msgCreateDataInfo: (data) => ({ typeUrl: "/user.chainb.testsuit1.MsgCreateDataInfo", value: data }),
        msgUpdateDataInfo: (data) => ({ typeUrl: "/user.chainb.testsuit1.MsgUpdateDataInfo", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
