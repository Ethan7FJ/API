import * as chai from "chai";
import chaiHttp  from "chai-http";
import app from '../index.js'
import faker from 'faker'

const expect = chai.expect;

const c = chai.use(chaiHttp)

describe('GET /api/info',()=>{
    it('should GET all info',(done)=>{
        c.request(app).get('/api/info').end((err,res)=>{
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).be.a("array")
            expect(res.body).not.have.lengthOf(0)
            done()
        })
    })
}) 

describe('POST /api/info',()=>{
    it('should POST a new component',(done)=>{
        let prueba ={
            title:faker.Lorem.words(1)[0],
            descripcion:faker.Lorem.paragraph(1)[0],
            img:faker.Image.animals(),
            leftcolor:faker.Internet.color(),
            rightcolor:faker.Internet.color()
        }
        c.request(app).post('/api/info').send(prueba).end((err,res)=>{
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).be.a('object')
            expect(res.body).to.have.property('prueba')
        }) 
        done()
    })
})

describe('GET /api/info/:id',()=>{
    it('should GET all info por id',(done)=>{
        c.request(app).get('/api/info/3').end((err,res)=>{
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body[0]).to.have.property('id_b')
            expect(res.body[0].id).to.equal()
            
        })
        done()
    })
}) 