package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/cosmos-sdk/x/ibc/core/02-client/types"
	"github.com/user/chainb/x/testsuit1/types"
)

func (k msgServer) SendIbcDataInfo(goCtx context.Context, msg *types.MsgSendIbcDataInfo) (*types.MsgSendIbcDataInfoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.IbcDataInfoPacketData

	packet.DataIndex = msg.DataIndex
	packet.Data = msg.Data

	// Transmit the packet
	err := k.TransmitIbcDataInfoPacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendIbcDataInfoResponse{}, nil
}
