# Message with Pigeon

Pigeon is a Golang cross-chain message relayer system for Paloma 
validators to deliver messages to any blockchain. Pigeon is actively 
maintained by the Volume Finance team.

## Installation

Start by installing the alpha release on your
validator environment:

```bash
wget -O - https://github.com/palomachain/pigeon/releases/download/v0.2.5-alpha/pigeon_0.2.5-alpha_Linux_x86_64v3.tar.gz | \
tar -C /usr/local/bin -xvzf - pigeon
chmod +x /usr/local/bin/pigeon
mkdir ~/.pigeon
```

### Set your keys

Next, set up your EVM keys:

```bash
pigeon evm keys generate-new ~/.pigeon/keys/evm/eth-main
```

Or, you may import existing EVM private keys:

```bash
pigeon evm keys import ~/.pigeon/keys/evm/eth-main
```

Ensure that your keys are stored safe and securly. 

## Configuration

Ensure your Paloma Cosmos-SDK keys are stored and available on 
your environment with:

```bash
palomad keys add "$VALIDATOR" --recover
```

Set the VALIDATOR env variable:

```bash
export VALIDATOR="$(palomad keys list --list-names | head -n1)"
```

In the pigeon directory, create your validator's configuration file 
`~/.pigeon/config.yaml`.

```yaml
loop-timeout: 5s

paloma:
  chain-id: paloma-testnet-6
  call-timeout: 20s
  keyring-dir: ~/.paloma
  keyring-pass-env-name: PALOMA_KEYRING_PASS
  keyring-type: test
  signing-key: ${VALIDATOR}
  base-rpc-url: http://localhost:26657
  gas-adjustment: 1.5
  gas-prices: 0.001ugrain
  account-prefix: paloma

evm:
  eth-main:
    chain-id: 1
    base-rpc-url: ${ETH_RPC_URL}
    keyring-pass-env-name: ETH_PASSWORD
    signing-key: ${ETH_SIGNING_KEY}
    keyring-dir: ~/.pigeon/keys/evm/eth-main
```

## Start messaging

Once the setup of Pigeon is successful, you can
start sending messages. Before that, Pigeon must know
the actor relaying message across the network by defining
its keys:

```bash
cat <<EOT >~/.pigeon/env.sh
PALOMA_KEYRING_PASS=<your Paloma key password>
ETH_RPC_URL=<Your Ethereum mainnet RPC URL>
ETH_PASSWORD=<Your ETH Key Password>
ETH_SIGNING_KEY=<Your ETH SIGNING KEY>
VALIDATOR=<VALIDATOR NAME>
EOT
```

Then, run Pigeon with:

```bash
source ~/.pigeon/env.sh
pigeon start
```

Pigeon will run in the background.

### Using systemd to run Pigeon

You can run Pigeon as a systemd process on your node
so that it will automatically restart on server reboots or crashes.
Validators are responsbile for actively maintaining relayed messages
and verifying the state of the chain.

Create a new unit file with:

```bash
touch ~/.pigeon/env.sh
```

Populate `env.sh` with:

```sh
cat <<EOT >/etc/systemd/system/pigeond.service
[Unit]
Description=Pigeon daemon
After=network-online.target
ConditionPathExists=/usr/local/bin/pigeon

[Service]
Type=simple
Restart=always
RestartSec=5
User=${USER}
WorkingDirectory=~
EnvironmentFile=${HOME}/.pigeon/env.sh
ExecStart=/usr/local/bin/pigeon start
ExecReload=

[Install]
WantedBy=multi-user.target
EOT
```

Start Pigeon:

```bash
service pigeond start

# Check that it's running successfully:
service pigeond status
# Or watch the logs:
journalctl -u pigeond.service -f -n 100
```
