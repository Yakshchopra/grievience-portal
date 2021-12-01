const request = require('supertest')
const app = require('../server')
describe('Get Endpoints', () => {
  it('Test the connection', async () => {
    const res = await request(app)
      .get('/')
     
    expect(res.text).toEqual("Connected to app");

  })
})
describe('Post Endpoints', ()=>{
  it('Signup', async ()=>{
    const res = await request(app)
    .post('/signup')
    .send({
        username: 'sanskarag23@gmail.com',
        password: 'dhjfsdjfhadf'
    })
    //console.log(res.error.message);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({status:'success',message:"Signup Sucessfull"})
  })
})