# react_redux_webpack_client

This does not require babel to perform transpiling as later version of node have ES6 support natively, however current version of node used here does not support import so require is being used.

Requires
========

Node v6.9.1

Build
=====

`npm run build`

Testing
=======

`npm run test`

Running
=======

`npm run dev`

NOTE: this runs web-dev-server with the following flag `--history-api-fallback=true` for page refresh support, if you were to deploy this in a non local environment your server must support the same behavior

### The webpack dev server is set to run on

**http://localhost:8080**

or

**http://localhost:8080/webpack-dev-server/**