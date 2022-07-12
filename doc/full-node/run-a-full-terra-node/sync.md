# Sync

## Before Sync

Certain files will need to be absent or deleted prior to download. A quicksync replaces blockchain data with a customized snapshot. For most use cases a "pruned" version is adequate. Pruned  versions will have certain transactions removed from the archive to make node performance smoother. If you are running a node for archival purposes, you will want an "archive" or "default" download.

After choosing  the appropriate download type, examine your node and ensure  that `.Paloma/data` is empty.

 **Example**:
```bash
6:22PM INF Removed all blockchain history dir=/home/ubuntu/.Paloma/data
```

::: {warning}
If you are a validator, ensure that you do not remove your private key.

Example of a removed private key:

```bash
6:22PM INF Reset private validator file to genesis state keyFile=/home/ubuntu/.Paloma/config/priv_validator_key.json stateFile=/home/ubuntu/.Paloma/data/priv_validator_state.json
```
:::

If you have an address book downloaded, you may keep it. Otherwise, you will need to download the [appropriate addressbook](join-a-network.md#join-a-public-network) prior to running  `Palomad start`.

## During Sync

After [Joining a public network](join-a-network.md#join-a-public-network), your node will begin to sync.

::: {admonition} Sync start times
:class: caution

Nodes take at least an hour to start syncing. This wait is normal. Before troubleshooting a sync, please wait an hour for the sync to start.
:::

## Monitor the sync

Your node is catching up with the network by replaying all the transactions from genesis and recreating the blockchain state locally. You can verify this process by checking the `latest_block_height` in the `SyncInfo` of the `Palomad status` response:  

```json
  {
    "SyncInfo": {
        "latest_block_height": "42", <-----
        "catching_up"        : true
    },
  ...
  }
```
Compare this height to the **Latest Blocks** on [stake.id](https://Paloma.stake.id/#/) to see your progress.


## Quicksync

You can significantly accelerate the synchronization process by providing `Palomad` with a recent snapshot of the network state. Snapshots are made publicly available by the Paloma community and can be downloaded at [https://quicksync.io/networks/Paloma.html](https://quicksync.io/networks/Paloma.html). Choose the snapshot corresponding to your network type (`testnet`/`mainnet`) and a mirror close to the location of your node server.

Before downloading a snapshot, make sure that you have the streaming and unpacking utilities installed:

```bash
apt-get install wget liblz4-tool aria2 -y
```

::: {admonition} Copy the download URL
:class: tip
Don't click the download link if you are using a separately hosted node, as this will not download to the correct machine. Instead, copy the link by right-clicking the  `Download` button. Downloading locally is not recommended unless you are hosting your node on the same computer from which you are browsing.

The link in your clipboard should resemble the following:

***https://dl2.quicksync.io/bombay-12-default.20220107.0510.tar.lz4***

:::

The archived snapshot contains the state and transactions of the network, which are stored in the `~/.Paloma/data/` folder by default. You should navigate exactly to the `~/.Paloma/` folder before proceeding to unpack it, or make sure that the contents of the archive are placed into `~/.Paloma/`.  


1. Download the snapshot.

   ```bash
   # aria2c is a multi-source command-line download utility
   # specify N cores(up to 16) to speed up the process via -xN (5 cores used below)
   aria2c -x5 https://dl2.quicksync.io/bombay-12-default.20220107.0510.tar.lz4
   ```

2. Unpack the `.lz4` archive:

   ```bash
   lz4 -d bombay-12-default.20220107.0510.tar.lz4
   ```
3. Unpack the `.tar` archive into `~/.Paloma`. Its contents must replace `~/.Paloma/data/`:
   ```bash
   tar -xvf bombay-12-default.20220107.0510.tar
   ```

   Due to the size of the network, this may take some time.  


4. After the snapshot is completely unpacked, start `Palomad`:

   ```bash
   Palomad start
   ```

## Sync Complete

You can tell that your node is in sync with the network when `SyncInfo.catching_up` in the `Palomad status` response returns `false` and the `latest_block_height` corresponds to the public network blockheight found on [ stake.id ](https://Paloma.stake.id/#/):

```bash
Palomad status  
```
**Example**:

```json
  {
    "SyncInfo": {
        "latest_block_height": "7356350",
        "catching_up"        : false
    },
  ...
  }
```

Validators can view the status of the network using [Paloma Finder](https://finder.Paloma.money).

## Verify the snapshot

To verify the validity of the snapshot, use a `sha512sum` to check it against a cosmos validator's registry of transactions.

### Compare checksum with its on-chain version.  

For this example, use the following snapshot URL:

`https://dl2.quicksync.io/bombay-12-default.20220107.0510.tar.lz4`

1. To make things easier for checking, assign the URL to a variable:

   ```bash
   URL=https://dl2.quicksync.io/bombay-12-default.20220107.0510.tar.lz4
   ```

2. Obtain the checksum for the snapshot:

   ```bash
   wget $URL.checksum
   # bombay-12-default.20220 100%[==============================>]  59.55K   215KB/   s    in 0.3s    
   # 2022-01-08 07:30:06 (215 KB/s) - 'bombay-12-   default.20220107.0510.tar.lz4.checksum.1' saved [60984/60984]
   ```

3. Obtain the tx hash and assign it to a variable for brevity:

   ```bash
   HASH=$(curl -s $URL.hash)   
   # 80E12115FEA1B3A161A2FDE7367FC34B8714EF398DAE5B1396F9748BC6218DB1
   ```

4. Obtain the transaction profile and verify it:

   ```bash
   curl -s https://lcd-cosmos.cosmostation.io/txs/$(curl -s $URL.hash) | jq -r    '.tx.value.memo'|sha512sum -c
   # bombay-12-default.20220107.0510.tar.lz4.checksum: OK
   ```

5. Obtain the checksum script and verify the provided snapshot:

   ```bash
   wget https://raw.githubusercontent.com/chainlayer/quicksync-playbooks/master/   roles/quicksync/files/checksum.sh
   ./checksum.sh $(basename $URL)
   ```

## Sync faster during testing

Sometimes you may want to sync faster by foregoing checks. This command should only be used by advanced users in non-production environments. To speed up the sync process during testing, use the following command:

   ```bash
   Palomad start --x-crisis-skip-assert-invariants
   ```

## Congratulations!

You've successfully joined a network as a full node operator. If you are a validator, continue to [manage a Paloma validator](../manage-a-Paloma-validator/README.md) for the next steps.
