const request = require('supertest');

// Unity test : get company 
describe('GET /company', function() {
  it('responds with json', function(done) {
    request("http://localhost:3000")
      .get('/company')
      .expect(200)
      .end(function (err, res) {
        console.log(err)
        if (err) return done(err);
        return done();
      }); 
  });
}); 

// Unity test : get company by id 
describe('GET /company/:companyId', function() {
    it('responds with json', function(done) {
    const companyId = 1;
      request("http://localhost:3000")
        .get(`/company/${companyId}`)
        .expect(200)
        .end(function (err, res) {
          console.log(err)
          if (err) return done(err);
          return done();
        }); 
    });
  }); 

  // Unity test : get company by symbol
  describe('GET /company/symbol/:symbol', function() {
    it('responds with json', function(done) {
    const symbol = 'baba';
      request("http://localhost:3000")
        .get(`/company/symbol/${symbol}`)
        .expect(200)
        .end(function (err, res) {
          console.log(err)
          if (err) return done(err);
          return done();
        }); 
    });
  }); 


  describe('POST /company', function () {
    it('responds with json', function (done) {
      request("http://localhost:3000")
        .post('/company')
  
        .send({
          "name": "Unity test",
          "symbol": "UN",
          "entryprice": "250"
        })
  
        .expect(200)
        .end(function (err, res) {
          console.log(err)
          if (err) return done(err);
          return done();
        });
    });
});