# Build Paloma

Paloma is the official Golang reference implementation of the Paloma 
node software. Use this guide to install Paloma and `palomad`, the 
command-line interface and daemon that connects to Paloma and enables 
you to interact with the Paloma blockchain.

:::warning Recommended operating systems

This guide has been tested against Linux distributions only. 
To ensure a successful production environment setup, consider 
using a Linux system.

:::

Running a full Paloma node is a resource-intensive process that 
requires a persistent server.

## Get the Paloma source code

1. Use `git` to retrieve [Paloma](https://github.com/palomachain/paloma), 
   and check out the `master` branch, which contains the latest stable release.

You can find out the latest tag on the [tags page](https://github.com/Paloma-money/core/tags) 
or via autocomplete in your terminal: type `git checkout v` and press `<TAB>`.

    ```bash
    git clone https://github.com/Paloma-money/core
    cd core
    git checkout [latest version]
    ```


2. Build Paloma. This will install the `palomad` executable to 
   your [ `GOPATH` ](https://go.dev/doc/gopath_code) environment variable.

   ```bash
   make install
   ```

3. Verify that Paloma is installed correctly.

   ```bash
   palomad version --long
   ```

   **Example**:

   ```bash
   name: paloma
   server_name: palomad
   version: v2.0.0
   commit: ea682c41e7e71ba0b182c9e7f989855fb9595885
   build_tags: netgo,ledger
   go: go version go1.18.2 darwin/amd64
   # ...followed by a lot of dependenecies
   ```

:::tip

If the `palomad: command not found` error message is returned, confirm that 
the Go binary path is correctly configured by running the following command:

```bash
export PATH=$PATH:$(go env GOPATH)/bin
```

:::

## Configure general settings

The following information describes the most important node configuration 
settings found in the `~/.paloma/config/` directory. It is 
recommended that you update these settings with your own information.

:::detail Structure of .paloma/config

```bash
~/.paloma/config
│-- addrbook.json                       # a registry of peers to connect to
│-- app.toml                            # palomad configuration file
│-- client.toml                         # configurations for the cli wallet (ex Palomacli)
│-- config.toml                         # Tendermint configuration  file
│-- genesis.json                        # gensesis transactions
│-- node_key.json                       # private key used for node authentication in the p2p protocol (its corresponding public key is the nodeid)
└-- priv_validator_key.json             # key used by the validator on the node to sign blocks
```

:::

### Initialize and configure moniker

Initialize the node with a human-readable name:

```bash
palomad init <your_custom_moniker> # ex., palomad init validator-joes-node
```

:::warning Moniker characters

Monikers can only contain ASCII characters; using Unicode characters 
will render your node unreachable by other peers in the network.

:::

You can update your node's moniker by editing the `moniker` field 
in `~/.paloma/config/config.toml`

### Update minimum gas prices

1. Open `~/.paloma/config/app.toml`.

2. Modify `minimum-gas-prices` and set the minimum price of gas a validator 
   will accept to validate a transaction and to prevent spam.

- You can [query API](https://api.Paloma.dev/gas-prices) to view the current 
  gas prices.

**Example**:

```toml
# The minimum gas prices a validator is willing to accept for processing a
# transaction. A transaction's fees must meet the minimum of any denomination
# specified in this config (e.g. 0.25token1;0.0001token2).
minimum-gas-prices = "0.01133ugrain"

## Start the light client daemon (LCD)

For information about the available Paloma REST API endpoints, see the 
[Swagger documentation](https://lcd.Paloma.dev/swagger/). To enable the REST 
API and Swagger, and to start the LCD, complete the following steps:

1. Open `~/.Paloma/config/app.toml`.

2. Locate the `API Configuration` section (`[api]`).

3. Change `enable = false` to `enable = true`.

   ```toml
   # Enable defines if the API server should be enabled.
   enable = true
   ```

4. Optional: Swagger defines if swagger documentation should automatically be 
   registered. To enable Swagger, change `swagger = false to `swagger = true`.

   ```toml
   swagger = true
   ```

5. Restart the service via `systemctl restart palomad`. Once restarted, the LCD 
   will be available (by default on port `127.0.0.1:1317`)

### Set up `external_address` in `config.toml`

In order to be added to the address book in seed nodes, you need to configure 
`external_address` in `config.toml`.  This addition will prevent continuous reconnections. 
The default P2P_PORT is 26656.

   ```sh
   sed -i -e 's/external_address = \"\"/external_address = \"'$(curl httpbin.org/ip | jq -r .origin)':26656\"/g' ~/.paloma/config/config.toml
   ```
