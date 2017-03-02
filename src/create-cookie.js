'use strict';

const crypto = require('crypto');

module.exports = (key, callback) => {

    if (typeof callback === 'undefined' && typeof key === 'function') {
        callback = key;
        key = undefined;
    }

    return callback ? createCookie(key, callback) : asPromise(key);
};

function createCookie(key = 'xsrf-token', callback) {

    crypto.randomBytes(16, (err, buf) => {

        if (err) {
            return callback(err);
        }

        const token = buf.toString('hex');
        const cookie = `${key}=${token}`;

        callback(null, cookie);
    });
}

function asPromise(key) {

    return new Promise((resolve, reject) => {

        createCookie(key, (err, cookie) => {

            if (err) {
                return reject(err);
            }

            resolve(cookie);
        });
    });
}
