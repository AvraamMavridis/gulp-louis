// Dependencies
var validate = require('../validate');
var chai  = require('chai');
var expect = chai.expect;

options = {
  url: 'https://www.npmjs.com/',
  timeout: 60,
  viewport: '1280x1024',
  engine: 'webkit',
  userAgent: 'Chrome/37.0.2062.120',
  noExternals: false,
  performanceBudget: {
    requests: 2,
    medianLatency: 10,
    slowestResponse: 1000
  }
}

options2 = {
  someInvalid: 'invalid'
}

describe('Validation', function(){
  it('should return true when the options are valid', function(){
    validation = validate(options);
    expect(validation).to.be.true;
  })
})

describe('Validation', function(){
  it('should throw an exception when the options are not valid', function(){
    expect(validate).to.throw(Error)
  })
})