# (Really) quickstart with Babel

Following [this tutorial](https://github.com/babel/example-node-server), I was trying to set a 
simple NodeJS server using Babel.

The result isn't impressing but it works.

## Getting started ([copy of this README.md file](https://github.com/babel/example-node-server))

First, we'll install ```babel-cli```

```shell
$ npm install --save-dev babel-cli
```

Then create the server file

```javascript
import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
```

Run the server

```shell
$ babel-node server.js
```

Visit your browser at ```127.0.0.1:1337``` to see an "Hello World" message.