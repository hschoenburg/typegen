module github.com/cosmos/typegen

go 1.13

require (
	github.com/cosmos/cosmos-sdk v0.37.3
	github.com/cosmos/sdk-application-tutorial v0.37.0
	github.com/cosmos/sdk-tutorials/hellochain v0.0.0-20191025185705-0b2687e6a6bc
	github.com/gorilla/mux v1.7.3
	github.com/spf13/cobra v0.0.5
	github.com/spf13/viper v1.4.0
	github.com/stretchr/testify v1.4.0
	github.com/tendermint/go-amino v0.15.1
	github.com/tendermint/tendermint v0.32.6
	github.com/tendermint/tm-db v0.2.0
	github.com/tkrajina/typescriptify-golang-structs v0.0.9
	google.golang.org/appengine v1.4.0 // indirect
)

replace github.com/tendermint/go-amino => github.com/tendermint/go-amino v0.15.1-0.20191003185523-ddfc7fca5e86

replace github.com/tkrajina/typescriptify-golang-structs v0.0.9 => github.com/hschoenburg/typescriptify-golang-structs v0.0.10-0.20191010235356-1921efa0ecc9
