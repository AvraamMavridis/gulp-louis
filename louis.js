// Internal dependencies
var analyze = require('./analyze');
// External dependencies
var connect = require('gulp-connect');

var defaultOptions = {
  runs: 1,
  url: 'http://localhost:8888', // the url to be tested
  timeout: 15, //timeout for phantomas run
  viewport: '1280x1024',
  engine: 'webkit', // experimental webkit, gecko
  userAgent: 'Chrome/37.0.2062.120',
  noExternals: false, // --no-externals block requests to 3rd party domains
  performanceBudget: {} // performanceBudget object
}

var louis = function(options, callback){
  options =                   options || {};
  options.runs =              defaultOptions.runs;
  options.engine =            options.engine || defaultOptions.engine;
  options.timeout =           options.timeout || defaultOptions.timeout;
  options.viewport =          options.viewport || defaultOptions.viewport;
  options.userAgent =         options.userAgent || defaultOptions.userAgent;
  options.noExternals =       options.noExternals || defaultOptions.noExternals;
  options.performanceBudget = options.performanceBudget || defaultOptions.performanceBudget;

  if(!!options.url)
  {
    options.url = options.url || defaultOptions.url;
  }
  else{
    options.url = options.url || defaultOptions.url;
    connect.server({
      port: 8888
    });
  }

  analyze(options, function(){
    connect.serverClose();    
  });

} 

module.exports = louis


