package app

import (
	"github.com/cosmos/cosmos-sdk/codec"
	abci "github.com/tendermint/tendermint/abci/types"
	"github.com/tendermint/tendermint/libs/log"
	dbm "github.com/tendermint/tm-db"

	"github.com/cosmos/sdk-tutorials/hellochain/starter"
)

const appName = "typegen-demo"

var (
	// ModuleBasics holds the AppModuleBasic struct of all modules included in the app
	ModuleBasics = starter.ModuleBasics
)

// Add the keeper and its key to our app struct
type demoApp struct {
	*starter.AppStarter
	Cdc *codec.Codec
}

func NewDemoApp(logger log.Logger, db dbm.DB) abci.Application {

	appStarter := starter.NewAppStarter(appName, logger, db)

	var app = &demoApp{
		appStarter,
		appStarter.Cdc,
	}

	// do some final configuration...
	app.InitializeStarter()

	return app
}
