const request = require('supertest');
const app = require('./app');


//const tasks = require('./routes/users');
let tasks = require('./routes/index').tasks;


describe('testing users stuff', () => { 

      test('Check if tasks is an array', () => {
        expect(Array.isArray(tasks))
        .toBe(true);
      });

     
})

describe('sites running', () =>{

test('GET/ Is the home page responding?', done =>{
    request(app)
    .get('/')
    .expect(200)
    .end(done);

})

test('GET/ Is the users page responding?', done =>{
    request(app)
    .get('/users')
    .expect(200)
    .end(done);
})

test('GET/ is the ids page responding?', done =>{
    request(app)
    .get('/ids')
    .expect(200)
    .end(done);
})
})