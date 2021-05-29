package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSendIbcDataInfo{}

func NewMsgSendIbcDataInfo(
	sender string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	dataIndex string,
	data string,
) *MsgSendIbcDataInfo {
	return &MsgSendIbcDataInfo{
		Sender:           sender,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		DataIndex:        dataIndex,
		Data:             data,
	}
}

func (msg *MsgSendIbcDataInfo) Route() string {
	return RouterKey
}

func (msg *MsgSendIbcDataInfo) Type() string {
	return "SendIbcDataInfo"
}

func (msg *MsgSendIbcDataInfo) GetSigners() []sdk.AccAddress {
	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{sender}
}

func (msg *MsgSendIbcDataInfo) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendIbcDataInfo) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid sender address (%s)", err)
	}
	return nil
}
