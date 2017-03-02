'use strict';

const createCookie = require('../src/create-cookie');
const http = require('http');

const server = http.createServer(async (req, res) => {

    const cookie = await createCookie();

    res.statusCode = 200;
    res.setHeader('Set-Cookie', cookie);
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on port:${process.env.PORT}`); // eslint-disable-line
});
