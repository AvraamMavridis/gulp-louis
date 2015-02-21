var joi = require('joi');
var clc = require('cli-color');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-louis';

//options schema for validation
var optionsSchema = {
  runs:              joi.number(),
  url:               joi.string(),
  engine:            joi.string(),
  timeout:           joi.number().integer().min(10),
  viewport:          joi.string(),
  userAgent:         joi.string(),
  noExternals:       joi.boolean(),
  performanceBudget: joi.object()
}

//performance budget object schema for validation
var performanceBudgetSchema = {
  requests:                 joi.number().integer().min(0),
  gzipRequests:             joi.number().integer().min(0),
  postRequests:             joi.number().integer().min(0),
  httpsRequests:            joi.number().integer().min(0),
  notFound:                 joi.number().integer().min(0),
  bodySize:                 joi.number().integer().min(0),
  contentLength:            joi.number().integer().min(0),
  httpTrafficCompleted:     joi.number().integer().min(0),
  timeToFirstByte:          joi.number().integer().min(0),
  timeToLastByte:           joi.number().integer().min(0),
  ajaxRequests:             joi.number().integer().min(0),
  htmlCount:                joi.number().integer().min(0),
  htmlSize:                 joi.number().integer().min(0),
  cssCount:                 joi.number().integer().min(0),
  cssSize:                  joi.number().integer().min(0),
  jsCount:                  joi.number().integer().min(0),
  jsSize:                   joi.number().integer().min(0),
  jsonCount:                joi.number().integer().min(0),
  jsonSize:                 joi.number().integer().min(0),
  imageCount:               joi.number().integer().min(0),
  imageSize:                joi.number().integer().min(0),
  videoCount:               joi.number().integer().min(0),
  videoSize:                joi.number().integer().min(0),
  webfontCount:             joi.number().integer().min(0),
  webfontSize:              joi.number().integer().min(0),
  base64Count:              joi.number().integer().min(0),
  base64Size:               joi.number().integer().min(0),
  otherCount:               joi.number().integer().min(0),
  otherSize:                joi.number().integer().min(0),
  cacheHits:                joi.number().integer().min(0),
  cacheMisses:              joi.number().integer().min(0),
  cachePasses:              joi.number().integer().min(0),
  cachingNotSpecified:      joi.number().integer().min(0),
  cachingTooShort:          joi.number().integer().min(0),
  cachingDisabled:          joi.number().integer().min(0),
  oldCachingHeaders:        joi.number().integer().min(0),
  consoleMessages:          joi.number().integer().min(0),
  cookiesSent:              joi.number().integer().min(0),
  cookiesRecv:              joi.number().integer().min(0),
  domainsWithCookies:       joi.number().integer().min(0),
  documentCookiesLength:    joi.number().integer().min(0),
  documentCookiesCount:     joi.number().integer().min(0),
  documentHeight:           joi.number().integer().min(0),
  commentsSize:             joi.number().integer().min(0),
  whiteSpacesSize:          joi.number().integer().min(0),
  DOMelementsCount:         joi.number().integer().min(0),
  DOMelementMaxDepth:       joi.number().integer().min(0),
  nodesWithInlineCSS:       joi.number().integer().min(0),
  imagesScaledDown:         joi.number().integer().min(0),
  imagesWithoutDimensions:  joi.number().integer().min(0),
  DOMidDuplicated:          joi.number().integer().min(0),
  hiddenContentSize:        joi.number().integer().min(0),
  DOMmutationsInsertsv:     joi.number().integer().min(0),
  DOMmutationsRemoves:      joi.number().integer().min(0),
  DOMmutationsAttributes:   joi.number().integer().min(0),
  DOMqueries:               joi.number().integer().min(0),
  DOMqueriesWithoutResults: joi.number().integer().min(0),
  DOMqueriesById:           joi.number().integer().min(0),
  DOMqueriesByClassName:    joi.number().integer().min(0),
  DOMqueriesByTagName:      joi.number().integer().min(0),
  DOMqueriesByQuerySelectorAll: joi.number().integer().min(0),
  DOMinserts:               joi.number().integer().min(0),
  DOMqueriesDuplicated:     joi.number().integer().min(0),
  DOMqueriesAvoidable:      joi.number().integer().min(0),
  domains:                  joi.number().integer().min(0),
  maxRequestsPerDomain:     joi.number().integer().min(0),
  medianRequestsPerDomain:  joi.number().integer().min(0),
  eventsBound:              joi.number().integer().min(0),
  eventsDispatched:         joi.number().integer().min(0),
  globalVariables:          joi.number().integer().min(0),
  globalVariablesFalsy:     joi.number().integer().min(0),
  headersCount:             joi.number().integer().min(0),
  headersSentCount:         joi.number().integer().min(0),
  headersRecvCount:         joi.number().integer().min(0),
  headersSize:              joi.number().integer().min(0),
  headersSentSize:          joi.number().integer().min(0),
  headersRecvSize:          joi.number().integer().min(0),
  headersBiggerThanContent: joi.number().integer().min(0),
  jQueryVersion:            joi.number().integer().min(0),
  jQueryVersionsLoaded:     joi.number().integer().min(0),
  jQueryOnDOMReadyFunctions: joi.number().integer().min(0),
  jQueryWindowOnLoadFunctions: joi.number().integer().min(0),
  jQuerySizzleCalls:         joi.number().integer().min(0),
  jQueryEventTriggers:      joi.number().integer().min(0),
  jQueryDOMReads:           joi.number().integer().min(0),
  jQueryDOMWrites:          joi.number().integer().min(0),
  jQueryDOMWriteReadSwitches: joi.number().integer().min(0),
  documentWriteCalls:       joi.number().integer().min(0),
  evalCalls:                joi.number().integer().min(0),
  jsErrors:                 joi.number().integer().min(0),
  closedConnections:        joi.number().integer().min(0),
  localStorageEntries:      joi.number().integer().min(0),
  redirects:                joi.number().integer().min(0),
  redirectsTime:            joi.number().integer().min(0),
  repaints:                 joi.number().integer().min(0),
  firstPaint:               joi.number().integer().min(0),
  requestsToDomContentLoaded: joi.number().integer().min(0),
  requestsToDomComplete:    joi.number().integer().min(0),
  assetsNotGzipped:         joi.number().integer().min(0),
  assetsWithQueryString:    joi.number().integer().min(0),
  assetsWithCookies:        joi.number().integer().min(0),
  smallImages:              joi.number().integer().min(0),
  smallCssFiles:            joi.number().integer().min(0),
  smallJsFiles:             joi.number().integer().min(0),
  multipleRequests:         joi.number().integer().min(0),
  timeToFirstCss:           joi.number().integer().min(0),
  timeToFirstJs:            joi.number().integer().min(0),
  timeToFirstImage:         joi.number().integer().min(0),
  domInteractive:           joi.number().integer().min(0),
  domContentLoaded:         joi.number().integer().min(0),
  domContentLoadedEnd:      joi.number().integer().min(0),
  domComplete:              joi.number().integer().min(0),
  timeBackend:              joi.number().integer().min(0),
  timeFrontend:             joi.number().integer().min(0),
  statusCodesTrail:         joi.number().integer().min(0),
  windowAlerts:             joi.number().integer().min(0),
  windowConfirms:           joi.number().integer().min(0),
  windowPrompts:            joi.number().integer().min(0),
  bodyHTMLSize:             joi.number().integer().min(0),
  iframesCount:             joi.number().integer().min(0),
  smallestResponse:         joi.number().integer().min(0),
  biggestResponse:          joi.number().integer().min(0),
  fastestResponse:          joi.number().integer().min(0),
  slowestResponse:          joi.number().integer().min(0),
  smallestLatency:          joi.number().integer().min(0),
  biggestLatency:           joi.number().integer().min(0),
  medianResponse:           joi.number().integer().min(0),
  medianLatency:            joi.number().integer().min(0)
}

function validateHelper(options, schema){
  joi.validate(options, schema, function(err, value){
    if(err !== null){
      var length = err.details.length;
      while(length--)
        var message = err.details[length].message
        console.log(clc.red.bgBlack('Error on options: ' + message));
        throw new PluginError(PLUGIN_NAME, message);
    }
  });
}

function validate(options){
  validateHelper(options, optionsSchema);
  validateHelper(options.performanceBudget, performanceBudgetSchema);
  return true;
}

module.exports = validate

