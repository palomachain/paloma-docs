# Integrations

You can integrate LocalPaloma in Paloma Station, `Palomad`, and JavaScript and Python SDKs.

## Paloma Station

Paloma Station has built-in support for LocalPaloma for quick and easy interaction. [Open Station](https://station.Paloma.money/) and switch to the `LocalPaloma` network.

## Palomad

1. Ensure the same version of `Palomad` and LocalPaloma are installed.

2. Use `Palomad` to talk to your LocalPaloma `Palomad` node:

    ```sh
    $ Palomad status
    ```

    This command automatically works because `Palomad` connects to `localhost:26657` by default.

    The following command is the explicit form:
    ```sh
    $ Palomad status --node=tcp://localhost:26657
    ```

3. Run any `Palomad` commands against your LocalPaloma network:

   ```sh
   $ Palomad query account Paloma1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8
   ```

## Paloma Python SDK

Connect to the chain through LocalPaloma's LCD server:

```python
from Paloma_sdk.client.lcd import LCDClient
Paloma = LCDClient("localPaloma", "http://localhost:1317")
```

## Paloma JavaScript SDK

Connect to the chain through LocalPaloma's LCD server:

```ts
import { LCDClient } from "@Paloma-money/Paloma.js";

const Paloma = new LCDClient({
  URL: "http://localhost:1317",
  chainID: "localPaloma",
});
```
