package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/user/chainb/x/testsuit1/types"
	"strconv"
)

// GetDataInfoCount get the total number of dataInfo
func (k Keeper) GetDataInfoCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DataInfoCountKey))
	byteKey := types.KeyPrefix(types.DataInfoCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetDataInfoCount set the total number of dataInfo
func (k Keeper) SetDataInfoCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DataInfoCountKey))
	byteKey := types.KeyPrefix(types.DataInfoCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendDataInfo appends a dataInfo in the store with a new id and update the count
func (k Keeper) AppendDataInfo(
	ctx sdk.Context,
	creator string,
	dataIndex string,
	data string,
) uint64 {
	// Create the dataInfo
	count := k.GetDataInfoCount(ctx)
	var dataInfo = types.DataInfo{
		Creator:   creator,
		Id:        count,
		DataIndex: dataIndex,
		Data:      data,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DataInfoKey))
	value := k.cdc.MustMarshalBinaryBare(&dataInfo)
	store.Set(GetDataInfoIDBytes(dataInfo.Id), value)

	// Update dataInfo count
	k.SetDataInfoCount(ctx, count+1)

	return count
}

// SetDataInfo set a specific dataInfo in the store
func (k Keeper) SetDataInfo(ctx sdk.Context, dataInfo types.DataInfo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DataInfoKey))
	b := k.cdc.MustMarshalBinaryBare(&dataInfo)
	store.Set(GetDataInfoIDBytes(dataInfo.Id), b)
}

// GetDataInfo returns a dataInfo from its id
func (k Keeper) GetDataInfo(ctx sdk.Context, id uint64) types.DataInfo {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DataInfoKey))
	var dataInfo types.DataInfo
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetDataInfoIDBytes(id)), &dataInfo)
	return dataInfo
}

// HasDataInfo checks if the dataInfo exists in the store
func (k Keeper) HasDataInfo(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DataInfoKey))
	return store.Has(GetDataInfoIDBytes(id))
}

// GetDataInfoOwner returns the creator of the dataInfo
func (k Keeper) GetDataInfoOwner(ctx sdk.Context, id uint64) string {
	return k.GetDataInfo(ctx, id).Creator
}

// RemoveDataInfo removes a dataInfo from the store
func (k Keeper) RemoveDataInfo(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DataInfoKey))
	store.Delete(GetDataInfoIDBytes(id))
}

// GetAllDataInfo returns all dataInfo
func (k Keeper) GetAllDataInfo(ctx sdk.Context) (list []types.DataInfo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DataInfoKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.DataInfo
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetDataInfoIDBytes returns the byte representation of the ID
func GetDataInfoIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetDataInfoIDFromBytes returns ID in uint64 format from a byte array
func GetDataInfoIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
