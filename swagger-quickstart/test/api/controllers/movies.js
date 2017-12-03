var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

    describe('movie', function() {

        describe('GET /movie', function() {

            it('should return an empty array', function(done) {

                request(server)
                    .get('/movie')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err);
                        res.body.should.be.eql({ movies: [] });
                        done();
                    });
            });

        });

        describe('POST /movie', function() {

            it('should respond with movies added to the list', function(done) {
                request(server)
                    .post('/movie')
                    .send({
                        "title": "Sample title",
                        "year": 1
                    })
                    .expect(200)
                    .expect('Content-Type', /json/)
                    .end(function(err, res) {
                        if (err) done(err);
                        res.body.should.have.property('success', 1);
                        res.body.should.have.property('description', "Movie added to the list!");
                        done();
                    });
            });

        });
    });
});