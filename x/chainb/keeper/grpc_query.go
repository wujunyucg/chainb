package keeper

import (
	"github.com/user/chainb/x/chainb/types"
)

var _ types.QueryServer = Keeper{}
