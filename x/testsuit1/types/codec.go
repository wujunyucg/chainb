package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgSendIbcDataInfo{}, "testsuit1/SendIbcDataInfo", nil)

	cdc.RegisterConcrete(&MsgCreateDataInfo{}, "testsuit1/CreateDataInfo", nil)
	cdc.RegisterConcrete(&MsgUpdateDataInfo{}, "testsuit1/UpdateDataInfo", nil)
	cdc.RegisterConcrete(&MsgDeleteDataInfo{}, "testsuit1/DeleteDataInfo", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendIbcDataInfo{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDataInfo{},
		&MsgUpdateDataInfo{},
		&MsgDeleteDataInfo{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewAminoCodec(amino)
)
