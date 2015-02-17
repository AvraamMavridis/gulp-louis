// Internal dependencies
var analyze = require('./analyze');

var defaultOptions = {
  runs: 1,
  url: 'http://www.npmjs.com', // the url to be tested
  reporter: 'json', //--reporter=[json|csv|tap|plain|statsd|elasticsearch]
  timeout: 2000, //timeout for phantomas run
  viewport: '1280x1024',
  consolelog: true, // --verbose for true, --silent for false
  engine: 'webkit', // experimental webkit, gecko
  log: 'results.json',
  userAgent: 'Chrome/37.0.2062.120',
  noExternals: false, // --no-externals block requests to 3rd party domains
  performanceBudget: {} // performanceBudget object
}

var louis = function(options){
  options =                   options || {};
  options.log =               options.log || defaultOptions.log;
  options.url =               options.url || defaultOptions.url;
  options.runs =              options.runs || defaultOptions.runs;
  options.engine =            options.engine || defaultOptions.engine;
  options.timeout =           options.timeout || defaultOptions.timeout;
  options.viewport =          options.viewport || defaultOptions.viewport;
  options.reporter =          options.reporter || defaultOptions.reporter;
  options.userAgent =         options.userAgent || defaultOptions.userAgent;
  options.consolelog =        options.consolelog || defaultOptions.consolelog;
  options.noExternals =       options.noExternals || defaultOptions.noExternals;
  options.performanceBudget = options.performanceBudget || defaultOptions.performanceBudget;

  options.performanceBudget = {
    requests: 10
  }

  analyze(options);
} 

louis();

module.exports = louis


