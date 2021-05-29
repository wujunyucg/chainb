package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateDataInfo{}

func NewMsgCreateDataInfo(creator string, dataIndex string, data string) *MsgCreateDataInfo {
	return &MsgCreateDataInfo{
		Creator:   creator,
		DataIndex: dataIndex,
		Data:      data,
	}
}

func (msg *MsgCreateDataInfo) Route() string {
	return RouterKey
}

func (msg *MsgCreateDataInfo) Type() string {
	return "CreateDataInfo"
}

func (msg *MsgCreateDataInfo) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDataInfo) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDataInfo) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDataInfo{}

func NewMsgUpdateDataInfo(creator string, id uint64, dataIndex string, data string) *MsgUpdateDataInfo {
	return &MsgUpdateDataInfo{
		Id:        id,
		Creator:   creator,
		DataIndex: dataIndex,
		Data:      data,
	}
}

func (msg *MsgUpdateDataInfo) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDataInfo) Type() string {
	return "UpdateDataInfo"
}

func (msg *MsgUpdateDataInfo) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDataInfo) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDataInfo) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateDataInfo{}

func NewMsgDeleteDataInfo(creator string, id uint64) *MsgDeleteDataInfo {
	return &MsgDeleteDataInfo{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteDataInfo) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDataInfo) Type() string {
	return "DeleteDataInfo"
}

func (msg *MsgDeleteDataInfo) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDataInfo) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDataInfo) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
