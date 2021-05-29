package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/user/chainb/x/testsuit1/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) DataInfoAll(c context.Context, req *types.QueryAllDataInfoRequest) (*types.QueryAllDataInfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var dataInfos []*types.DataInfo
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	dataInfoStore := prefix.NewStore(store, types.KeyPrefix(types.DataInfoKey))

	pageRes, err := query.Paginate(dataInfoStore, req.Pagination, func(key []byte, value []byte) error {
		var dataInfo types.DataInfo
		if err := k.cdc.UnmarshalBinaryBare(value, &dataInfo); err != nil {
			return err
		}

		dataInfos = append(dataInfos, &dataInfo)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDataInfoResponse{DataInfo: dataInfos, Pagination: pageRes}, nil
}

func (k Keeper) DataInfo(c context.Context, req *types.QueryGetDataInfoRequest) (*types.QueryGetDataInfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var dataInfo types.DataInfo
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasDataInfo(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DataInfoKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetDataInfoIDBytes(req.Id)), &dataInfo)

	return &types.QueryGetDataInfoResponse{DataInfo: &dataInfo}, nil
}
