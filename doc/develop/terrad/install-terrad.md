# Install `Palomad`

`Palomad` is the command-line interface and daemon that connects to Paloma and enables you to interact with the Paloma blockchain. Paloma is the official Golang reference implementation of the Paloma node software.

This guide is for developers who want to install `Palomad` and interact with Paloma without running a full node. If you want to run a full node or join a network, visit [](../../../full-node/run-a-full-Paloma-node/README.md).

### Prerequisites

- [Golang v1.18 linux/amd64](https://golang.org/doc/install)
- Ensure your `GOPATH` and `GOBIN` environment variables are set up correctly.
- Linux users: install [build-essential](http://linux-command.org/en/build-essential.html).

:::{admonition} Palomad for Mac
:class: danger
If you are using a Mac, follow the [`Palomad` Mac installation guide](./Palomad-mac.md).
:::

## From binary

The easiest way to install `Palomad` and Paloma is by downloading a pre-built binary for your operating system. You can find the latest binaries on the [releases](https://github.com/Paloma-money/core/releases) page. If you have a Mac, follow the [Mac installation instructions](./Palomad-mac.md).

## From source

### 1. Get the Paloma source code

Use `git` to retrieve [Paloma](https://github.com/Paloma-money/core/), and check out the `main` branch, which contains the latest stable release.

```bash
git clone https://github.com/Paloma-money/core
cd core
git checkout [latest version]
```

### 2. Build Paloma from source

Build Paloma, and install the `Palomad` executable to your `GOPATH` environment variable.

```bash
make install
```

### 3. Verify your Paloma installation

Verify that Paloma is installed correctly.

```bash
Palomad version --long
```

The following example shows version information when Paloma is installed correctly:

```bash
name: Paloma
server_name: Palomad
version: v2.0.0
commit: ea682c41e7e71ba0b182c9e7f989855fb9595885
build_tags: netgo,ledger
go: go version go1.18.2 darwin/amd64
```

::: {tip}
If the `Palomad: command not found` error message is returned, confirm that the Go binary path is correctly configured by running the following command:

```
export PATH=$PATH:$(go env GOPATH)/bin
```

:::

## Next steps

With `Palomad` installed, you can set up a local testing environment using [LocalPaloma](../../localPaloma/README.md).

For more information on `Palomad` commands and usage, see [](using-Palomad.md).
