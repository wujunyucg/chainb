package types

const (
	// ModuleName defines the module name
	ModuleName = "testsuit1"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_capability"

	// Version defines the current version the IBC module supports
	Version = "testsuit1-1"

	// PortID is the default port id that module binds to
	PortID = "testsuit1"
)

var (
	// PortKey defines the key to store the port ID in store
	PortKey = KeyPrefix("testsuit1-port-")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	DataInfoKey      = "DataInfo-value-"
	DataInfoCountKey = "DataInfo-count-"
)

const (
	ReceiveDataKey = "ReceiveData-value-"
)
