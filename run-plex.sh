docker run \
-d \
--name plex \
-p 32400:32400/tcp \
-p 8324:8324/tcp \
-p 32469:32469/tcp \
-p 1900:1900/udp \
-p 32410:32410/udp \
-p 32412:32412/udp \
-p 32413:32413/udp \
-p 32414:32414/udp \
-e TZ="America/New_York" \  # Set your timezone
-e PLEX_CLAIM="claim-xxxxxxxx" \  # Replace with your Plex claim token
-e ADVERTISE_IP="http://192.168.12.20:32400/" \  # Set your Unraid server’s IP address
-h Tower \  # Set the hostname to match your Unraid hostname
-v /mnt/user/appdata/plex:/config \  # Set path to Plex config
-v /mnt/disk1/transcode:/transcode \  # Set path for Plex transcoding temporary files
-v /mnt/user/movies:/movies \  # Set path to your media files
plexinc/pms-docker
