// Internal dependencies
var analyze = require('./analyze');
// External dependencies
var through = require('through2');
var sync = require('sync');

var defaultOptions = {
  runs: 1,
  url: 'http://www.npmjs.com', // the url to be tested
  timeout: 2000, //timeout for phantomas run
  viewport: '1280x1024',
  engine: 'webkit', // experimental webkit, gecko
  userAgent: 'Chrome/37.0.2062.120',
  noExternals: false, // --no-externals block requests to 3rd party domains
  performanceBudget: {} // performanceBudget object
}

var louis = function(options, callback){
  options =                   options || {};
  options.url =               options.url || defaultOptions.url;
  options.runs =              options.runs || defaultOptions.runs;
  options.engine =            options.engine || defaultOptions.engine;
  options.timeout =           options.timeout || defaultOptions.timeout;
  options.viewport =          options.viewport || defaultOptions.viewport;
  options.userAgent =         options.userAgent || defaultOptions.userAgent;
  options.noExternals =       options.noExternals || defaultOptions.noExternals;
  options.performanceBudget = options.performanceBudget || defaultOptions.performanceBudget;

  options.performanceBudget = {
    requests: 10,
    medianLatency: 1000,
    timeToFirstByte: 700,
    htmlSize: 25000,
    cacheMisses: 8,
    gzipRequests: 10,
    globalVariables: 15
  }

  analyze(options, function(){
    if(!!callback){
      callback();
    }
  });

} 

louis();

module.exports = louis


