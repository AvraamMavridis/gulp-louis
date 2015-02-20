var validate = require('../validate');
var assert = require('assert');
var chai  = require('chai');
var expect = chai.expect;

options = {
  url: 'https://www.npmjs.com/'
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
  it('should return throw an exception when the options are not valid', function(){
    validation = validate(options2);
    expect(validation).to.be.false;
  })
})