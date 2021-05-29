package testsuit1

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/user/chainb/x/testsuit1/keeper"
	"github.com/user/chainb/x/testsuit1/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the receiveData
	for _, elem := range genState.ReceiveDataList {
		k.SetReceiveData(ctx, *elem)
	}

	// Set all the dataInfo
	for _, elem := range genState.DataInfoList {
		k.SetDataInfo(ctx, *elem)
	}

	// Set dataInfo count
	k.SetDataInfoCount(ctx, uint64(len(genState.DataInfoList)))

	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all receiveData
	receiveDataList := k.GetAllReceiveData(ctx)
	for _, elem := range receiveDataList {
		elem := elem
		genesis.ReceiveDataList = append(genesis.ReceiveDataList, &elem)
	}

	// Get all dataInfo
	dataInfoList := k.GetAllDataInfo(ctx)
	for _, elem := range dataInfoList {
		elem := elem
		genesis.DataInfoList = append(genesis.DataInfoList, &elem)
	}

	genesis.PortId = k.GetPort(ctx)

	return genesis
}
