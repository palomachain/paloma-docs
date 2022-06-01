# Transactions

This document explains how to influence the blockchain's state by broadcasting transactions.

Transactions include:

- a list of messages
- an optional memo
- a fee
- a signature from a key

The messages included in a transaction contain the information that will be routed to a proper message handler in the node, which in turn parses the inputs and determines the next state of the blockchain.

## Create transactions

### Create a wallet

You will first want to create a wallet which you can use to sign transactions.

```ts
import { MnemonicKey, LCDClient } from "@Paloma-money/Paloma.js";

const mk = new MnemonicKey();
const Paloma = new LCDClient({
  URL: "https://pisco-lcd.Paloma.dev",
  chainID: "pisco-1",
});
const wallet = Paloma.wallet(mk);
```

### Create messages

```ts
import { MsgSend } from "@Paloma-money/Paloma.js";

const send = new MsgSend(wallet.key.accAddress, "<random-Paloma-address>", {
  uluna: 1000,
});
```

### Create and Sign Transaction

```ts
const tx = await wallet.createAndSignTx({
  msgs: [send],
  memo: "Hello",
});
```

### Broadcast transaction

```ts
const txResult = await Paloma.tx.broadcast(tx);
```

The default broadcast mode is `block`, which waits until the transaction has been included in a block. This will give you the most information about the transaction, including events and errors while processing.

You can also use `sync` or `async` broadcast modes.

```ts
// const syncTxResult = await Paloma.tx.broadcastSync(tx);
// const asyncTxResult = await Paloma.tx.broadcastAsync(tx);
```

### Check events

If you broadcasted the transaction with `block`, you can get the events emitted by your transaction.

```ts
import { isTxError } from "@Paloma-money/Paloma.js";

const txResult = Paloma.tx.broadcast(tx);

if (isTxError(txResult)) {
  throw new Error(
    `encountered an error while running the transaction: ${txResult.code} ${txResult.codespace}`
  );
}

// check for events from the first message
txResult.logs[0].eventsByType.store_code;
```
