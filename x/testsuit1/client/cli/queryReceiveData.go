package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/user/chainb/x/testsuit1/types"
)

func CmdListReceiveData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-receiveData",
		Short: "list all receiveData",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllReceiveDataRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.ReceiveDataAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowReceiveData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-receiveData [index]",
		Short: "shows a receiveData",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetReceiveDataRequest{
				Index: args[0],
			}

			res, err := queryClient.ReceiveData(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
