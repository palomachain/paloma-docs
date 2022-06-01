# Using Paloma Classic

Paloma.js can be configured to work with Paloma Classic by passing a boolean `isClassic` value to the LCD.

## LCDClient

```ts
const gasPrices = await(
  await fetch("https://columbus-api.Paloma.dev/gas-prices", {
    redirect: "follow",
  })
).json();

const gasPricesCoins = new Coins(gasPrices);

const lcd = new LCDClient({
  URL: "https://columbus-lcd.Paloma.dev/",
  chainID: "columbus-5",
  gasPrices: gasPricesCoins,
  gasAdjustment: "1.5",
  gas: 10000000,
  isClassic: true, // false by default, change to true if you want to interact with Paloma Classic
});
```

## Conversion Functions

The `isClassic` boolean can also be specified for most unit conversion functions in Paloma.js. If unspecified, these methods will simply use the Luna version specified in the LCD config. The following are two examples of methods that accept this boolean value.

```ts
public toAmino(isClassic?: boolean)
public fromData(isClassic?: boolean)
```

## Signing Messages with Keys

Wallet objects on Paloma contain information about the LCDClient, so they inherit the `isClassic` parameter automatically. However, key objects, such as `MnemonicKey`, `RawKey` or `CLIKey` do not. For example, `createSignatureAmino` is a method where you can specify if you'd like to use Paloma Classic.

```ts
 public async createSignatureAmino(
      tx: SignDoc,
      isClassic?: boolean
    ): Promise<SignatureV2> { ... }

```
