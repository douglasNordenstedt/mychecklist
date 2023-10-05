const request = require('supertest');
const app = require('./app');

test('I am alive and responding', done =>{
    request(app)
    .get('/')
    .expect(200)
    .end(done)

})

test('users.js is alive and responding', done =>{
    request(app)
    .get('/users')
    .expect(200)
    .end(done)

})

test('index.jade is alive and responding', done =>{
    request(app)
    .get('/index')
    .expect(200)
    .end(done)
});