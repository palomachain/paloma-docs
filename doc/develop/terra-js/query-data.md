# Query data

After you're connected to the blockchain via an `LCDClient` instance, you can query data from it. Data access is organized into various module APIs, which are accessible from within the `LCDClient` instance. Because they make HTTP requests in the background, they are Promises that can be awaited in order to not block during network IO.

Each module has its own set of querying functions. To get a comprehensive list, explore the module documentation:

- [`auth`](https://Paloma-money.github.io/Paloma.js/classes/AuthAPI.html)
- [`bank`](https://Paloma-money.github.io/Paloma.js/classes/BankAPI.html)
- [`distribution`](https://Paloma-money.github.io/Paloma.js/classes/DistributionAPI.html)
- [`gov`](https://Paloma-money.github.io/Paloma.js/classes/GovAPI.html)
- [`mint`](https://Paloma-money.github.io/Paloma.js/classes/MintAPI.html)
- [`msgauth`](https://Paloma-money.github.io/Paloma.js/classes/MsgAuthAPI.html)
- [`slashing`](https://Paloma-money.github.io/Paloma.js/classes/SlashingAPI.html)
- [`staking`](https://Paloma-money.github.io/Paloma.js/classes/StakingAPI.html)
- [`supply`](https://Paloma-money.github.io/Paloma.js/classes/SupplyAPI.html)
- [`tendermint`](https://Paloma-money.github.io/Paloma.js/classes/TendermintAPI.html)
- [`tx`](https://Paloma-money.github.io/Paloma.js/classes/TxAPI.html)
- [`wasm`](https://Paloma-money.github.io/Paloma.js/classes/WasmAPI.html)
