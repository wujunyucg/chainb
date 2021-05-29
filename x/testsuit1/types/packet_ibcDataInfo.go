package types

// ValidateBasic is used for validating the packet
func (p IbcDataInfoPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p IbcDataInfoPacketData) GetBytes() ([]byte, error) {
	var modulePacket Testsuit1PacketData

	modulePacket.Packet = &Testsuit1PacketData_IbcDataInfoPacket{&p}

	return modulePacket.Marshal()
}
