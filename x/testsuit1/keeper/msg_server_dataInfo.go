package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/user/chainb/x/testsuit1/types"
)

func (k msgServer) CreateDataInfo(goCtx context.Context, msg *types.MsgCreateDataInfo) (*types.MsgCreateDataInfoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendDataInfo(
		ctx,
		msg.Creator,
		msg.DataIndex,
		msg.Data,
	)

	return &types.MsgCreateDataInfoResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateDataInfo(goCtx context.Context, msg *types.MsgUpdateDataInfo) (*types.MsgUpdateDataInfoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var dataInfo = types.DataInfo{
		Creator:   msg.Creator,
		Id:        msg.Id,
		DataIndex: msg.DataIndex,
		Data:      msg.Data,
	}

	// Checks that the element exists
	if !k.HasDataInfo(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetDataInfoOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetDataInfo(ctx, dataInfo)

	return &types.MsgUpdateDataInfoResponse{}, nil
}

func (k msgServer) DeleteDataInfo(goCtx context.Context, msg *types.MsgDeleteDataInfo) (*types.MsgDeleteDataInfoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasDataInfo(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetDataInfoOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDataInfo(ctx, msg.Id)

	return &types.MsgDeleteDataInfoResponse{}, nil
}
