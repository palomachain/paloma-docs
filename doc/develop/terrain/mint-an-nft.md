# Mint an NFT using Palomain <img src="/img/bullet_Paloma.svg" height="40px">
 
NFTs, or non-fungible tokens, are unique digital assets that can be showcased, bought, and sold on the blockchain. Purchasing an NFT gives you ownership over the unique digital creation, similar to buying a distinct painting or art piece.
 
In this tutorial, you will learn how to mint your own NFT using the [NFT Palomain application](https://github.com/Paloman6/nft-on-Paloma.git) and LocalPaloma.
 
## Prerequisites
 
- [Download Google Chrome](https://www.google.com/chrome/downloads/)
- [Download the Paloma Station extension](../../../learn/Paloma-station/download/Paloma-station-extension.md)
- [Create a Paloma Station wallet](../../../learn/Paloma-station/download/Paloma-station-extension.md)
- [Install npm](https://kinsta.com/blog/how-to-install-node-js/)
- [Install git](https://git-scm.com/downloads)
- [Install Palomain](initial-setup.md)
- [Install LocalPaloma](using-Palomain-localPaloma.md)
- 16+ gb of RAM
 
:::{admonition} RAM requirements
:class: note
 
This tutorial utilizes LocalPaloma which requires at least 16gb of RAM to run properly.
 
:::
 
## 1. Create your project
 
After installing all the [prerequisites](#prerequisites) listed above, use the following steps to set up your environment and clone the [NFT minting repository](https://github.com/Paloman6/nft-on-Paloma.git), which contains the NFT minting smart contract as well as the corresponding front-end application.
 
 
1. Create and enter a new directory for your project:
 
   ```sh
   mkdir my-nft-project
   cd my-nft-project
   ```
 
2. Clone the `NFT on Paloma` repository to your project directory:
 
   ```sh
   git clone https://github.com/Paloman6/nft-on-Paloma.git
   ```
 
3. Enter the cloned repository and run `npm install` to install all relevant Node dependencies:
 
   ```sh
   cd nft-on-Paloma
   npm install
   ```
 
After all the dependencies have been installed, you can close this terminal window.
 
## 2. Start LocalPaloma
LocalPaloma is a complete Paloma testnet and ecosystem containerized with Docker. In this tutorial, you will use LocalPaloma to simulate transactions in a local testing environment.
 
After [downloading LocalPaloma](https://docs.Paloma.money/docs/develop/dapp/quick-start/using-Palomain-localPaloma.html#install-and-run-localPaloma) and all its dependencies, open a new terminal window and run the following commands:
 
```sh
cd localPaloma
docker-compose up
```
 
After running LocalPaloma successfully, you will start seeing simulated blockchain transactions.
 
## 3. Set up your wallet
 
In order to use your Paloma Station wallet with LocalPaloma, you will need to configure your wallet to run on your LocalPaloma network.
 
1. Open the Paloma Station extension in your Google Chrome web browser. Click the gear icon in the upper right corner and change the network from **mainnet** to  **localPaloma**.
 
  <div align="center">
    <img src="../../../../nft/extension_localPaloma.png" alt="Switch to LocalPaloma" style="border:1px solid black; width: 500px; margin: 10px 10px 20px 10px;"/>
  </div>
 
2. Click **Switch wallet**.
 
  <div align="center">
    <img src="../../../../nft/switch_wallet.png" alt="Switch Wallet" style="border:1px solid black; width: 500px; margin: 10px 10px 20px 10px;"/>
  </div>
 
3. Click **Preconfigured wallets…** and select `test1` from the drop-down list.
 
  <div align="center">
    <img src="../../../../nft/test_wallet.png" alt="Switch Wallet" style="border:1px solid black; width: 500px; margin: 10px 10px 20px 10px;"/>
  </div>
 
Now that you have successfully switched to the testing wallet on LocalPaloma, you will be able to deploy your smart contract.
 
## 4. Update the instantiate message
 
Before you can deploy your contract and begin minting your NFT, you'll need to change the `config.Palomain.json` file in your cloned repository.
 
1. In your Paloma Station extension, open your `test1` wallet and copy the wallet address:
 
  <div align="center">
    <img src="../../../../nft/copy_address.png" alt="Switch Wallet" style="border:1px solid black; width: 500px; margin: 10px 10px 20px 10px;"/>
  </div>
 
 
2. Open the `config.Palomain.json` file in a code editor and locate the instantiate message section:
 
   ```json
    "instantiateMsg": {
      "name":"NFT Collection Name",
      "symbol":"NFTSYMBOL",
      "minter":"Palomaxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    }
    ```
 
3. Update the `"name"`, `"symbol"`, and `"minter"` fields with the following information. Make sure to paste your `test1` wallet address under the `"minter"` field:
 
   ```json
   "instantiateMsg": {
     "name":"Cryptocurrency Token NFTs",
     "symbol":"TOKENS",
     "minter":"Paste your test1 wallet address here"
   }
   ```
 
Be sure to save the changes to your `config.Palomain.json` file.
 
## 5. Deploy your contract to LocalPaloma
 
You are finally ready to deploy your contract and run the NFT minting application. Make sure you have installed Palomain before proceeding.
 
1. Ensure you are still [running LocalPaloma](#2-start-localPaloma) in a terminal window.
 
2. Open a new terminal window and run the following commands to navigate to your cloned repo and deploy your contract using Palomain:
 
   ```
   cd my-nft-project/nft-on-Paloma
   Palomain deploy cw721-metadata-onchain --signer test1
   ```
 
## 5. Launch the NFT frontend app
 
Once the contract deployment is successfully completed, you can run the frontend application to mint your NFT.
 
1. Change into the `frontend` directory and install the node dependencies:
 
   ```sh
   cd frontend
   npm install
   ```
 
2. Start the frontend applicaiton:
 
   ```sh
   npm start
   ```
 
Your chrome browser should open and you should be browsing the frontend application located at http://localhost:3000/ .
 
3. Fill out all of the information on the form to mint your first NFT.
 
- **ID** may be any value that you would like to correspond to the ID of the new NFT.
 
- You can enter any **Name** for your NFT.
 
- The **Owner Address** is the wallet address which will be the owner of the newly minted NFT. In this tutorial, this will be your `test1` wallet address.
 
- Use the following **URL** for the NFT image of Luna used in this tutorial:
 
   ```
   https://assets.Paloma.money/icon/60/Luna.png
   ```
 
  <div align="center">
    <img src="../../../../nft/application.png" alt="NFT Minting Application" style="border:1px solid black; width: 500px; margin: 10px 10px 20px 10px;"/>
  </div>
 
:::{admonition} NFT hosting
 
Most NFT creators host their NFTs using IPFS (Interplanetary File System). There are a variety of resources available to post an NFT on IPFS, such as [Pinata](https://www.pinata.cloud/). In this example, the image used is available at https://assets.Paloma.money/icon/60/Luna.png .
 
:::
 
## 6. Mint your NFT
 
Your NFT is ready to mint!
 
1. Click **Mint NFT**. Your Paloma Station extension will pop up to request confirmation of the transaction.
 
2. Click the **Post** Button.
 
After a few seconds, the frontend webpage will display your NFT.
 
  <div align="center">
    <img src="../../../../nft/nft_minted.png" alt="Minted NFT" style="border:1px solid black; width: 500px; margin: 10px 10px 20px 10px;"/>
  </div>
 
Congratulations, You just minted your first NFT!
 
## View Your New NFT
 
1. Before you can view your NFT, you'll need to locate your contract address. Open the `refs.Palomain.json` file located in your cloned repository and copy the contract address listed after `"default"`:
 
   ```json
   {
     "localPaloma": {
       "cw721-metadata-onchain": {
         "codeId": "1",
         "contractAddresses": {
           "default": "Copy this address"
         }
       }
     }
   }
   ```
 
 
2. You can view your NFT using the [Paloma Station NFT page](https://station.Paloma.money/nft). Connect your wallet using the **Connect** button located in the upper right corner of the screen.
 
 
  <div align="center">
    <img src="../../../../nft/connect_wallet.png" alt="Connect Wallet" style="border:1px solid black; width: 500px; margin: 10px 10px 20px 10px;"/>
  </div>
 
 
3. Click **Add tokens >** located in the middle of the page to open the contract search window. Paste your contract address in the search bar. Click the **+** button located next to the address of your NFT collection.
 
  <div align="center">
    <img src="../../../../nft/nft_search.png" alt="Search NFT Collection" style="border:1px solid black; width: 500px; margin: 10px 10px 20px 10px;"/>
  </div>
 
4. Close the search window and you will be presented with information on your NFT collection.
 
  <div align="center">
    <img src="../../../../nft/nft_station.png" alt="NFT Collection" style="border:1px solid black; width: 500px; margin: 10px 10px 20px 10px;"/>
  </div>
 
From here, you can **View** relevant information about your NFT or **Send** your NFT to any specified wallet address.
 
## Congratulations!
 
You've just minted your first NFT on the Paloma blockchain! If you have your own unique digital creation that you would like to share with the world, you can follow these instructions using the mainnet network and your personal Paloma Station wallet.
 
:::{admonition} Mint NFTs on the mainnet
 
LocalPaloma is not needed for deployments on the mainnet and is primarily used for local testing and development purposes.
 
:::

