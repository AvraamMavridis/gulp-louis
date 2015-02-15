// Internal dependencies
var funDOMas = require('./funDOMas');

var defaultOptions = {
  url: 'http://localhost:8000', // the url to be tested
  reporter: 'json', //--reporter=[json|csv|tap|plain|statsd|elasticsearch]
  timeout: 20, //timeout for phantomas run
  viewport: '1280x1024',
  consolelog: true, // --verbose for true, --silent for false
  engine: 'webkit', // experimental webkit, gecko
  log: 'results.json',
  userAgent: 'Chrome/37.0.2062.120',
  noExternals: false // --no-externals block requests to 3rd party domains
  performanceBudget: {} // performanceBudget object
}

funDOMas.analyze({ url: 'http://www.gazzeta.gr'});




