chat.js
=======

Simple example of a WebSocket based chat application based on node.js, socket.io and backbone.js

### Supported browsers ###

Tested successfully with Chrome 21, Firefox 15, Opera 12 and Safari 6

### nginx configuration ###

> upstream node_chat {


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