process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../server');

const should = chai.should();

const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const db = require('knex')(configuration);

chai.use(chaiHTTP);

describe('Client Routes', () => {
  it('should return the homepage with text', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        // res.should.have.status(200);
        res.should.be.html;
        done();
      });
  });

  it('should return a 404 for a route that does not exist', (done) => {
    chai.request(server)
      .get('/sad')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});

describe('API Routes', () => {
  beforeEach((done) => {
    db.migrate.latest()
      .then(() => db.seed.run())
      .then(() => done());
  });

  describe('GET /api/item', () => {
    it('should return all of the students', (done) => {
      chai.request(server)
        .get('/api/item')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.data.should.be.a('array');
          res.body.data.length.should.equal(5);
          res.body.data[0].should.have.property('name');
          res.body.data[0].should.have.property('reason');
          res.body.data[0].should.have.property('cleanliness');
          done();
        });
    });
    it('should be able to post an item', (done) => {
      chai.request(server)
        .get('/api/item')
        .end((err, res) => {
          res.body.data.should.have.length(5);
          chai.request(server)
            .post('/api/item')
            .send({
              id: 2,
              name: "plants",
              reason: "spruce up the place",
              cleanliness: "dusty"
            })
            .end((err, res) => {
              res.should.have.status(201);
              res.body.should.be.a('object');
              res.body.should.have.property('id');
              res.body.id.should.equal(2);
              chai.request(server)
                .get('/api/item')
                .end((err, res) => {
                  res.should.have.status(200);
                  res.should.be.json;
                  res.body.data.should.be.a('array');
                  res.body.data.should.have.length(6);
                  done();
                });
            });
        });
      });
  });
});