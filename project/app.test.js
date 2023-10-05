const request = require('supertest');
const app = require('./app');

const othertests = require('./othertests')
const i = require('./othertests').i;

describe('GET/ homepage tests', () =>{

    test('is the checklist complete?'), done =>{
        
    }

})

describe('testing test', () => { 

    test('GET/ import const', () => {
        request(othertests)
        expect(i)
        .toBe(1)
    });

})

describe('sites running', () =>{

test('GET/ Is the home page responding?', done =>{
    request(app)
    .get('/')
    .expect(200)
    .end(done)

})

test('GET/ Is the users page responding?', done =>{
    request(app)
    .get('/users')
    .expect(200)
    .end(done)

})
})