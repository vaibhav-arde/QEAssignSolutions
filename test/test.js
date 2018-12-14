var should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('https://jsonplaceholder.typicode.com');
const soapRequest = require('easy-soap-request');
const fs = require('fs');

describe('Validate a GET and POST call', function(){
    it('Assert the response status code to be 200', function(){
        api.get('/post/1')
        .set('Accept','application/json')
        .expect(200);
    });
    it('Make a GET call and Assert the response status code and userId', function(){
        api.get('/posts/1')
        .set('Accept','application/json')
        .expect(200)
        .end(function(err,res){
            if(!err){
                expect(res.body.userId).to.equal(1);
            }
            else{
                console.log(err);
            }
            //done();
        });
    });
    it('Make a POST call and Assert the response status code and id', function(){
        api.post('/posts')
        .set('content-type','application/json')
        .send({
            title: 'foo',
            body: 'bar',
            userId: 1
        })
        .expect(201)
        .end(function(err,res){
            console.log(res.body);
            
            if(!err){
                expect(res.body.title).to.equal('foo');
                expect(res.body.body).to.equal('bar');
                expect(res.body.userId).to.equal('1');
            }
            else{
                console.log(err);
            }
            done();
        });
    });
});

const url = 'http://www.dneonline.com/calculator.asmx';
const headers = {
  'user-agent': 'easy-soap-request-test',
  'Content-Type': 'text/xml;charset=UTF-8',
};
const xml = fs.readFileSync('test/TestXML.xml', 'utf-8');

describe('Make a SOAP call. Assert response status code and assert any one node value in response xml', () => {
  const coordinates = '20';
  it(`Price for IBM to be ${coordinates}`, async () => {
    const { response } = await soapRequest(url, headers, xml);
    const { body, statusCode } = response;
    console.log(response);
    expect(body).to.include(coordinates);
    expect(statusCode).to.be.equal(200);
  });
});