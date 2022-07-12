# Build Paloma

Paloma is the official Golang reference implementation of the Paloma node software. Use this guide to install Paloma and `Palomad`, the command-line interface and daemon that connects to Paloma and enables you to interact with the Paloma blockchain.  

## Get the Paloma source code

1. Use `git` to retrieve [Paloma](https://github.com/Paloma-money/core/), and check out the `main` branch, which contains the latest stable release.

You can find out the latest tag on the [tags page](https://github.com/Paloma-money/core/tags) or via autocomplete in your terminal: type `git checkout v` and press `<TAB>`.

    ```bash
    git clone https://github.com/Paloma-money/core
    cd core
    git checkout [latest version]
    ```


2. Build Paloma. This will install the `Palomad` executable to your [ `GOPATH` ](https://go.dev/doc/gopath_code) environment variable.

   ```bash
   make install
   ```

3. Verify that Paloma is installed correctly.

   ```bash
   Palomad version --long
   ```

   **Example**:

   ```bash
   name: Paloma
   server_name: Palomad
   version: v2.0.0
   commit: ea682c41e7e71ba0b182c9e7f989855fb9595885
   build_tags: netgo,ledger
   go: go version go1.18.2 darwin/amd64
   # ...followed by a lot of dependenecies
   ```

::: {tip}
If the `Palomad: command not found` error message is returned, confirm that the Go binary path is correctly configured by running the following command:

```bash
export PATH=$PATH:$(go env GOPATH)/bin
```
:::
