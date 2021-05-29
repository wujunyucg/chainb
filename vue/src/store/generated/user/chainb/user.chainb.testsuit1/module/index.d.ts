import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteDataInfo } from "./types/testsuit1/tx";
import { MsgSendIbcDataInfo } from "./types/testsuit1/tx";
import { MsgCreateDataInfo } from "./types/testsuit1/tx";
import { MsgUpdateDataInfo } from "./types/testsuit1/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgDeleteDataInfo: (data: MsgDeleteDataInfo) => EncodeObject;
    msgSendIbcDataInfo: (data: MsgSendIbcDataInfo) => EncodeObject;
    msgCreateDataInfo: (data: MsgCreateDataInfo) => EncodeObject;
    msgUpdateDataInfo: (data: MsgUpdateDataInfo) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
