# Set up a production environment

Use the following information to set up and manage your production-level 
full Paloma node.  

For information about running a validator node, visit the 
[validator guide](../manage-a-Paloma-validator/README.md).

## Create a dedicated user

Although `Palomad` does not require a super user account, during the 
setup process you'll need super user permission to create and modify 
some files. It is strongly recommended to use a normal user when 
running `Palomad`.  

## Increase the maximum files `Palomad` can open

`Palomad` is set to open 1024 files by default. It is recommended 
that you increase this amount.

Modify `/etc/security/limits.conf`[*](https://linux.die.net/man/5/limits.conf) 
to increase the amount, where `nofile` is the number of files `Palomad` can open.

```bash
# If you have never changed this system config or your system is fresh, most of this file will be commented
# ...
*                soft    nofile          65535   # Uncomment the following two lines at the bottom
*                hard    nofile          65535   # Change the default values to ~65535
# ...
```

# Run the server as a daemon

`Palomad` must be running at all times. It is recommended that you 
register `Palomad` as a `systemd` service so that it will be started 
automatically when the system reboots.

## Register `Palomad` as a service

1. Create a service definition file in `/etc/systemd/system/Palomad.service`.

     **Example**:

     ```bash
     [Unit]
     Description=Paloma Daemon
     After=network.target

     [Service]
     Type=simple
     User=<Paloma_USER>
     ExecStart=<PATH_TO_PalomaD>/Palomad start  
     Restart=on-abort

     [Install]
     WantedBy=multi-user.target

     [Service]
     LimitNOFILE=65535  
     ```

2. Modify the `Service` section according to your environment:

   - Enter the user (likely your username, unless you created a user 
     specifically for `Palomad`)
   - Enter the path to the `Palomad` executable. `<PATH_TO_PalomaD>` 
     is likely `/home/<YOUR_USER>/go/bin/Palomad` or `/usr/go/bin`. 
     Confirm this with `whereis Palomad`
   - Make sure you made the correct edits to /etc/security/limits.conf


3. Run `systemctl daemon-reload` followed by `systemctl enable Palomad`. 
   This will register `Palomad` as a system service and turn it on upon startup.

4. Now start the serivce with `systemctl start Palomad`.

### Controlling the service

Use `systemctl` to start, stop, and restart the service:

```bash
# Check health
systemctl status Palomad
# Start
systemctl start Palomad
# Stop
systemctl stop Palomad
# Restart
systemctl restart Palomad
```

### Access logs

Use `journalctl -t` to access entire logs, entire logs in reverse, 
and the latest and continuous log.

```bash
# Entire log reversed
journalctl -t Palomad -r
# Entire log
journalctl -t Palomad
# Latest and continuous
journalctl -t Palomad -f
```
