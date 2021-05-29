package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers testsuit1-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/testsuit1/dataInfos/{id}", getDataInfoHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/testsuit1/dataInfos", listDataInfoHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/testsuit1/dataInfos", createDataInfoHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/testsuit1/dataInfos/{id}", updateDataInfoHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/testsuit1/dataInfos/{id}", deleteDataInfoHandler(clientCtx)).Methods("POST")

}
