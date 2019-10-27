package main

import (
	"fmt"
	"reflect"

	//"strings"

	"github.com/cosmos/cosmos-sdk/server"
	amino "github.com/tendermint/go-amino"

	"github.com/spf13/cobra"
	"github.com/tendermint/tendermint/libs/cli"
	typescriptify "github.com/tkrajina/typescriptify-golang-structs/typescriptify"

	sdk "github.com/cosmos/cosmos-sdk/types"
	app "github.com/cosmos/typegen/app"
)

func main() {
	cobra.EnableCommandSorting = false

	cdc := app.Cdc

	config := sdk.GetConfig()
	config.SetBech32PrefixForAccount(sdk.Bech32PrefixAccAddr, sdk.Bech32PrefixAccPub)
	config.SetBech32PrefixForValidator(sdk.Bech32PrefixValAddr, sdk.Bech32PrefixValPub)
	config.SetBech32PrefixForConsensusNode(sdk.Bech32PrefixConsAddr, sdk.Bech32PrefixConsPub)
	config.Seal()

	ctx := server.NewDefaultContext()

	rootCmd := &cobra.Command{
		Use:               "nsd",
		Short:             "nameservice App Daemon (server)",
		PersistentPreRunE: server.PersistentPreRunEFn(ctx),
	}
	// CLI commands to initialize the chain
	rootCmd.AddCommand(
		dumpSchema(cdc),
	)

	// prepare and add flags
	executor := cli.PrepareBaseCmd(rootCmd, "TG", "~/.typegen")
	err := executor.Execute()
	if err != nil {
		panic(err)
	}
}

func inspectSchema(obj interface{}) {

	typ := reflect.TypeOf(obj)
	kind := typ.Kind()

	n := reflect.New(typ)
	val := reflect.ValueOf(n)

	fmt.Printf("typ***************************\n%v\n\n", typ)
	fmt.Printf("kind***************************\n%v\n\n", kind)
	fmt.Printf("val***************************\n%v\n\n", val)
	fmt.Printf("\n\n\n")

}

func dumpSchema(cdc *amino.Codec) *cobra.Command {
	converter := typescriptify.New()
	dumpSchemaCmd := &cobra.Command{
		Use:   "schema",
		Short: "dump schema from the amino codec",
		Run: func(cmd *cobra.Command, args []string) {
			types := cdc.TypeInfosByName()
			defer func() {
				if err := recover(); err != nil {
					fmt.Println("capturedd Panic")
					fmt.Println(err)
				}
			}()
			for _, v := range types {

				intr := reflect.New(v.Type).Elem().Interface()
				inspectSchema(intr)

				typ := reflect.TypeOf(intr)
				//v := reflect.ValueOf(intr)
				//n := reflect.New(typ)
				//v := reflect.ValueOf(n)

				switch typ.Kind() {

				case reflect.Struct, reflect.Array:
					converter.Add(intr)

				default:
					fmt.Printf("skipping %v", typ.Kind())

				}
			}

			err := converter.ConvertToFile("schemaTest.ts")
			if err != nil {
				panic(err)
			}
		},
	}
	return dumpSchemaCmd
}
