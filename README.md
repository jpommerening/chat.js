chat.js
=======

Simple example of a WebSocket based chat application based on node.js, socket.io and backbone.js

### Supported browsers ###

Tested successfully with Chrome 21, Firefox 15, Opera 12 and Safari 6

### nginx configuration ###

> upstream node_chat {>     server 127.0.0.1:1337;> }> > server {>         #listen   80; ## listen for ipv4; this line is default and implied>         #listen   [::]:80 default ipv6only=on; ## listen for ipv6> >         root /srv/www/vhosts/chat/client;>         index index.html index.htm;> >         server_name chat.basti.dev;> >         location / {>                 expires 0;>                 add_header Cache-Control private;>         }> >         location /node/ {>                 expires 0;>                 add_header Cache-Control private;>                 proxy_set_header X-Real-IP $remote_addr;>                 proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;>                 proxy_set_header Host $http_host;>                 proxy_set_header X-NginX-Proxy true;> >                 proxy_pass http://node_chat/;>                 proxy_redirect off;>                 break;>         }> }
### Apache configuration ###
> NameVirtualHost *:80
> 
> <VirtualHost *:80>
>     ServerName localhost
>     DocumentRoot "/Users/thorsten/htdocs"
> </VirtualHost>
> 
> <VirtualHost *:80>
>     ServerName chat.macbookpro.local
>     DocumentRoot "/Users/thorsten/htdocs/chat.js/client"
> 
>     ProxyPass /node/ http://chat.macbookpro.local:1337/
>     ProxyPassReverse /node/ http://chat.macbookpro.local:1337/
>     <Proxy *>
>         Order deny,allow
>         Allow from all
>     </Proxy>
> </VirtualHost>
