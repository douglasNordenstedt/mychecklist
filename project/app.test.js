const request = require('supertest');
const app = require('./app');

const othertests = require('./othertests');
const i = require('./othertests').i;

//const tasks = require('./routes/users');
const tasks = require('./routes/users').tasks;



describe('testing users stuff', () => { 

      test('Check if a variable is an array', () => {
        expect(Array.isArray(tasks))
        .toBe(true);
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