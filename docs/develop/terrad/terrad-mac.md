# Install `Palomad` for Mac (Intel or M1)

`Palomad` is the command-line interface and daemon that connects to Paloma and enables you to interact with the Paloma blockchain. Paloma is the official Golang reference implementation of the Paloma node software.

This guide is for developers who want to install `Palomad` and interact with Paloma without running a full node. If you want to run a full node or join a network, visit [](../../../full-node/run-a-full-Paloma-node/README.md).

1. Navigate to [https://github.com/Paloma-money/core/tags](https://github.com/Paloma-money/core/tags) and click on the latest release. 

2. Download the `Paloma_<latest-version-here>_Darwin_x86_64.tar.gz` file.

3. Unzip the file in the downloads folder by double clicking on it. 

   :::{admonition} M1 Mac users
   :class: danger
   If you are using an Intel-based Mac, proceed to step 4. 
   
   M1 Mac users will need to create `/lib` and `/bin` directories in `/usr/local`:
   
      ```sh
      sudo cd /usr/local
      sudo mkdir lib
      sudo mkdir bin
      ```
   :::

4. Navigate to the expanded file in downloads: 
    
   ```bash
   cd Downloads/Paloma_<downloaded-version>_Darwin_x86_64/
   ```
    
5. Copy `libwasmvm.dylib` to `/lib`:

   ```sh
   sudo cp libwasmvm.dylib /usr/local/lib
   ```


6. Add `Palomad` to your path:

   ```sh
   sudo cp Palomad /usr/local/bin
   ```


7. Start `Palomad`

   ```sh
   Palomad
   ```
    
   :::{admonition} If a security warning occurs:
   :class: note
    
   1. Open your System Preferences and click **Security & Privacy**. 

   2. Under the **General** tab, click **Allow anyway**.

   3. Run `Palomad` again. 

   4. When prompted, click **Open**.

   5. Repeat for other security errors or warnings. 

   :::

