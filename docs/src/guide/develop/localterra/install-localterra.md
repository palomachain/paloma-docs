# Install LocalPaloma

## Prerequisites

- [Docker](https://www.docker.com/)
- [`docker-compose`](https://github.com/docker/compose)
- Supported known architecture: x86_64

::: {admonition} Palomain and LocalPaloma
:class: tip
If you are using LocalPaloma with Palomain, use the [Palomain and LocalPaloma install guide](../Palomain/using-Palomain-localPaloma.md).
:::

## Installation

1. Run the following commands:

   ```sh
   $ git clone --depth 1 https://www.github.com/Paloma-money/LocalPaloma
   $ cd LocalPaloma
   ```

2. Make sure your Docker daemon is running in the background and [`docker-compose`](https://github.com/docker/compose) is installed.

## Using LocalPaloma

### Start

```sh
$ docker-compose up
```

Your environment now contains:

- [Palomad](http://github.com/Paloma-money/core) RPC node running on `tcp://localhost:26657`
- LCD running on http://localhost:1317
- [FCD](http://www.github.com/Paloma-money/fcd) running on http://localhost:3060

### Stop

```sh
$ docker-compose stop
```

### Reset

```sh
$ docker-compose rm
```