
const createCookie = require('../create-cookie');

describe('create-cookie', () => {

    describe('as callback', () => {

        it('should provide expected cookie string', (done) => {

            createCookie((err, cookie) => {

                const split = cookie.split('=');
                const key = split[0];
                const value = split[1];

                expect(key).toBe('xsrf-token');
                expect(value).toHaveLength(32);

                done();
            });
        });
    });

    describe('as promise', () => {

        it('should provide expected cookie string', (done) => {

            createCookie().then(cookie => {

                const split = cookie.split('=');
                const key = split[0];
                const value = split[1];

                expect(key).toBe('xsrf-token');
                expect(value).toHaveLength(32);

                done();
            });
        });
    });

    describe('given a custom key', () => {

        it('should provide expected cookie string', (done) => {

            createCookie('csrf-token').then(cookie => {

                const split = cookie.split('=');
                const key = split[0];
                const value = split[1];

                expect(key).toBe('csrf-token');
                expect(value).toHaveLength(32);

                done();
            });
        });
    });
});
