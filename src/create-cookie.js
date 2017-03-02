'use strict';

const crypto = require('crypto');

module.exports = (callback) => callback ? createCookie(callback) : asPromise();

function createCookie(callback) {

    crypto.randomBytes(16, (err, buf) => {

        if (err) {
            return callback(err);
        }

        const token = buf.toString('hex');
        const cookie = `xsrf-token=${token}`;

        callback(null, cookie);
    });
}

function asPromise() {

    return new Promise((resolve, reject) => {

        createCookie((err, cookie) => {

            if (err) {
                return reject(err);
            }

            resolve(cookie);
        });
    });
}
