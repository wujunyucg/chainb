package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/user/chainb/x/testsuit1/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ReceiveDataAll(c context.Context, req *types.QueryAllReceiveDataRequest) (*types.QueryAllReceiveDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var receiveDatas []*types.ReceiveData
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	receiveDataStore := prefix.NewStore(store, types.KeyPrefix(types.ReceiveDataKey))

	pageRes, err := query.Paginate(receiveDataStore, req.Pagination, func(key []byte, value []byte) error {
		var receiveData types.ReceiveData
		if err := k.cdc.UnmarshalBinaryBare(value, &receiveData); err != nil {
			return err
		}

		receiveDatas = append(receiveDatas, &receiveData)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllReceiveDataResponse{ReceiveData: receiveDatas, Pagination: pageRes}, nil
}

func (k Keeper) ReceiveData(c context.Context, req *types.QueryGetReceiveDataRequest) (*types.QueryGetReceiveDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetReceiveData(ctx, req.Index)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetReceiveDataResponse{ReceiveData: &val}, nil
}
