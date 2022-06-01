# System configuration

:::{admonition} Recommended operating systems
:class: caution  
This guide has been tested against Linux distributions only. To ensure a successful production environment setup, consider using a Linux system.
:::

Running a full Paloma node is a resource-intensive process that requires a persistent server. If you want to use Paloma without downloading the entire blockchain, use [Paloma Station](https://station.Paloma.money/).

## Hardware requirements

These are the the minimum requirements for running a full Paloma node:

- Four or more CPU cores
- At least 32 GB of memory
- At least 300 mbps of network bandwidth
- At least 2 TB NVME SSD

:::{admonition} Storage requirements
:class: warning
As the network grows, the minimum storage requirements will also grow. It is recommended that you use more than the minimum storage requirements to run a robust full node.

:::

## Prerequisites

- [Golang v1.18+ linux/amd64](https://go.dev/dl/)

  ::: {dropdown} Installing Go for MacOS & Linux

  Go releases can be found here: [ https://go.dev/dl/ ](https://go.dev/dl/)

  In your browser, you can right-click the correct release (V1.18) and `Copy link`.

  ```bash
  # 1. Download the archive

  wget https://go.dev/dl/go1.18.2.linux-amd64.tar.gz

  # Optional: remove previous /go files:

  sudo rm -rf /usr/local/go

  # 2. Unpack:

  sudo tar -C /usr/local -xzf go1.18.2.linux-amd64.tar.gz

  # 3. Add the path to the go-binary to your system path:
  # (for this to persist, add this line to your ~/.profile or ~/.bashrc or  ~/.zshrc)

  export PATH=$PATH:/usr/local/go/bin

  # 4. Verify your installation:

  go version

  # go version go1.18.2 linux/amd64

  ```

  :::

- Linux users: `sudo apt-get install -y build-essential`

## Commonly used ports

`Palomad` uses the following TCP ports. Toggle their settings to fit your environment.

Most validators will only need to open the following port:

- `26656`: The default port for the P2P protocol. This port is used to communicate with other nodes and must be open to join a network. However, it does not have to be open to the public. For validator nodes, [configuring `persistent_peers`](updates-and-additional.md#additional-settings) and closing this port to the public is recommended.

Additional ports:

- `1317`: The default port for the [Lite Client Daemon](../../develop/guides/start-lcd.md) (LCD), which can be executed by `Palomad rest-server`. The LCD provides an HTTP RESTful API layer to allow applications and services to interact with your `Palomad` instance through RPC. For usage examples, see [Paloma REST API](https://lcd.Paloma.dev/swagger/). You don't need to open this port unless you have use for it.

- `26660`: The default port for interacting with the [Prometheus](https://prometheus.io) database, which can be used to monitor the environment. In the default configuration, this port is not open.

- `26657`: The default port for the RPC protocol. Because this port is used for querying and sending transactions, it must be open for serving queries from `Palomad`.

::: {warning}
Do not open port `26657` to the public unless you plan to run a public node.
:::