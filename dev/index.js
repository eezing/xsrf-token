'use strict';

const createCookie = require('../src/create-cookie');
const http = require('http');

const server = http.createServer((req, res) => {

    createCookie()
        .then(cookie => {
            res.statusCode = 200;
            res.setHeader('Set-Cookie', cookie);
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello World\n');
        })
        .catch(() => {
            res.statusCode = 500;
            res.end();
        });
});

server.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on port:${process.env.PORT}`); // eslint-disable-line
});
