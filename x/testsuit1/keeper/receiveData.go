package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/user/chainb/x/testsuit1/types"
)

// SetReceiveData set a specific receiveData in the store from its index
func (k Keeper) SetReceiveData(ctx sdk.Context, receiveData types.ReceiveData) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceiveDataKey))
	b := k.cdc.MustMarshalBinaryBare(&receiveData)
	store.Set(types.KeyPrefix(receiveData.Index), b)
}

// GetReceiveData returns a receiveData from its index
func (k Keeper) GetReceiveData(ctx sdk.Context, index string) (val types.ReceiveData, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceiveDataKey))

	b := store.Get(types.KeyPrefix(index))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshalBinaryBare(b, &val)
	return val, true
}

// DeleteReceiveData removes a receiveData from the store
func (k Keeper) RemoveReceiveData(ctx sdk.Context, index string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceiveDataKey))
	store.Delete(types.KeyPrefix(index))
}

// GetAllReceiveData returns all receiveData
func (k Keeper) GetAllReceiveData(ctx sdk.Context) (list []types.ReceiveData) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ReceiveDataKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ReceiveData
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
