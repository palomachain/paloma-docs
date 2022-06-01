# Reset and troubleshooting

## Complete reset

Occasionally you may need to perform a comlpete reset of your node due to data corruption or misconfiguration. Resetting will remove all data in `~/.Paloma/data` and the addressbook in `~/.Paloma/config/addrbook.json` and reset the node to genesis state. 

To perform a complete reset of your `Palomad` state, use:

```
Palomad unsafe-reset-all
```

Running this command successfully will produce the following log: 

```
[ INF ] Removed existing address book file=/home/user/.Paloma/config/addrbook.json
[ INF ] Removed all blockchain history dir=/home/user/.Paloma/data
[ INF ] Reset private validator file to genesis state keyFile=/home/user/.Paloma/config/priv_validator_key.json stateFile=/home/user/.Paloma/data/priv_validator_state.json
```

:::{admonition} Check the adressbook
:class: tip
After resetting, make sure the addressbook contains peer addresses and is in the correct spot. If not, [download an adressbook](../run-a-full-Paloma-node/join-a-network.md#1-select-a-network) and place it in `~/.Paloma/config/`.
:::


### Change Genesis

To change the genesis version, delete `~/.Paloma/config/genesis.json`.

You can recreate a genesis version via the following steps:

```bash
 Palomad add-genesis-account $(Palomad keys show <account-name> -a) 100000000uluna,1000usd
 Palomad gentx <account-name> 10000000uluna --chain-id=<network-name> 
 Palomad collect-gentxs
```

### Reset personal data

:::{danger}
You may be unable to use your node and its associated accounts after changing your personal data. Do not perform this action unless your node is disposable. 
:::

To change your personal data to a completely pristine state, delete both `~/.Paloma/config/priv_validator_state.json` and `~/.Paloma/config/node_key.json`. 

### Node health

A healthy node will have the following files in place and populated:

- Addressbook `~/.Paloma/config/addrbook.json`
- Genesis file `~/.Paloma/config/genesis.json`
- Validator state  `~/.Paloma/config/priv_validator_state.json`
- Node key `~/.Paloma/config/node_key.json`

### Resync

You can proceed to [resync manually](sync.md) or [via quicksync](sync.md#quicksync). 


