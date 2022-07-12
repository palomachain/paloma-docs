# Use Palomain with the testnet

The Pisco testnet is used for testing transactions on the Paloma network.

## Prerequisites

- [Install the Paloma Station browser extension](../../../learn/Paloma-station/download/Paloma-station-extension.md)

## Create a Pisco wallet

[Create a new wallet](../../../learn/Paloma-station/download/Paloma-station-extension.md#create-a-wallet) using the Paloma Station extension. It's recommended that you name this wallet "Pisco" or "testnet" so it's easy to remember.

After creating a Pisco wallet and storing the seed phrase, request funds from the testnet faucet:

https://faucet.Paloma.money

:::{danger}
Make sure you have your seed phrase stored somewhere since you will need it to complete this tutorial.
:::

# Counter tutorial

After creating a testnet wallet, you are ready to use Palomain. This short tutorial walks you through setting up your project and creating a simple counter.

## 1. Scaffold your dApp

Scaffold your new application:

```sh
Palomain new my-Paloma-dapp
cd my-Paloma-dapp
npm install
```

### Project structure

The following structure shows your scaffolded project:

```
.
├── contracts              # The contracts' source code.
│   ├── counter
│   └── ...                # Add more contracts here.
├── frontend               # The front-end application.
├── lib                    # Predefined functions for task and console.
├── tasks                  # Predefined tasks.
├── keys.Palomain.js        # Keys for signing transactions.
├── config.Palomain.json    # Config for connections and contract deployments.
└── refs.Palomain.json      # Deployed code and contract references.
```

## 2. Configure the testnet

Before deploying, Palomain needs to learn how to access your Pisco wallet. To do this you'll need to modify `keys.Palomain.js` in the generated project.

Modify the configuration and input your seed phrase to look like this:

```
module.exports = {
  pisco: {
    mnemonic:
      "PLACE_YOUR_PISCO_SEED_PHRASE_HERE",
  },
};
```

## 3. Deploy

To deploy the application, run the following command:

```sh
Palomain deploy counter --signer pisco --network testnet
```

The deploy command performs the following steps automatically:

- Builds the counter smart contract.
- Optimizes the counter smart contract.
- Uploads counter smart contract to testnet.
- Instantiates the deployed smart contract.

:::{warning}
If you get the following error:

```
CLIError: account sequence mismatch, expected 1, got 0: incorrect account sequence
```

Wait a few seconds then try the deploy command again.
:::

### Deploying with Paloma Station

Besides the CLI approach above, there is also the option of deploying and interacting with your contracts on testnet through the [Paloma Station UI](https://station.Paloma.money/).

1. Compile your project with `Palomain`. If you have localPaloma running, this can be done with `Palomain deploy <project> --signer test1`. This will build the wasm bytecode and output a **.wasm** file such as **artifacts/counter.wasm**

2. You can now upload this contract to the testnet via Station. Go to [https://station.Paloma.money/contract](https://station.Paloma.money/contract) and click on "Upload"

3. Upload the .wasm bytecode. This step will generate a `codeId` which will be used for initializing the contract.

4. Go back to the Contract page on [Station](https://station.Paloma.money/contract) and instantiate your contract by passing in the `codeId` and parameter (`{ "count": 0 }`) for "Init msg".

5. Now, the contract is deployed as a **MsgInstantiateContract** transaction type. You will be able to see the address of the newly initialized contract in the logs at the bottom of the transaction details. ([example](https://finder.Paloma.money/testnet/tx/FF669A3E0CECDC6278A0E390FAF93E9531F43599B77A45BD18ECC6023E15ACB3))

6. Search for your contract address on the **Contract** page of Paloma Station. You can now execute a query or command against your contract. The payloads must be in JSON format. A command execution (with Execute) might look like:

   ```sh
   {
     "increment": {}
   }
   ```

   :::{admonition} Optional
   :class: note
   If you have a frontend, update your client-side `refs.Palomain.json` to reflect the latest codeId and deployed contract address.
   :::

## 4. Interact with the deployed contract

Palomain template comes with several predefined helpers in `lib/index.js`. Use them to start interacting with your smart contract:

1. Run `Palomain console --network testnet`.

2. With the console open, increment the counter by running the following:

   ```JavaScript
   await lib.increment(wallets.pisco);
   ```

   Make sure to pass your Pisco wallet to the increment command. `Palomain console` makes wallets specified in `keys.Palomain.js` available in the `wallets` object.

   You can get the current count by using:

   ```JavaScript
   await lib.getCount()
   ```

3. After incrementing once, `await lib.getCount()` will return:

   ```JSON
   { count: 1 }
   ```

## 5. Front-end scaffolding

Palomain also scaffolds a very simple front-end.

1. In the Paloma Station Chrome extension, [switch the network to `testnet`](../../../learn/Paloma-station/testnet.md).

2. To use the front end, run the following commands in order. Palomain sync-refs command copies your deployed contract addresses to the front-end part of the codebase.

   ```
   cd frontend
   npm install
   npm start
   ```

3. With `testnet` selected in Paloma Station you can now increment and reset the counter from the front end.

## Demo

![](/img/tut_counter.gif)

## Advanced usage

For more advanced use cases such as deploying to the testnet or mainnet, see [Palomain's readme](https://github.com/Paloma-money/Palomain#readme).
