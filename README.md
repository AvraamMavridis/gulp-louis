# Louis

**Louis** is a gulp task that is used to analyze the performance of a website against a performance budget.

[![npm version](https://badge.fury.io/js/gulp-louis.svg)](http://badge.fury.io/js/gulp-louis)

[![NPM](https://nodei.co/npm/gulp-louis.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gulp-louis/)

## Introduction

There are many definitions of the **performance budget** on the web, my favourite is from Zachary Brady.

***A performance budget provides values against which design, development, content, or any aspect of a site that may affect performance, can be made.***

The aim of the plugin is to analyze the performance of the website against a performance bugdet. There are various metrics against which we can set a performance budget e.g. number of requests, imageSize etc.


## Getting started


#### Installation
#### 1. [Usage](#usage)
#### 2. [Example](#example)
#### 3. [Output](#output)
#### 4. [Options](#options)
#### 5. [Performance Budget Options](#performance-budget-options)
#### 6. [Change log](#change-log)

## Getting Started


### Usage

```bash
$ npm install --save-dev gulp-louis
```

```js
import louis = require('gulp-louis');

gulp.task('louis', function() {
  louis({
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
  });
});

gulp.task('default', ['louis']);
```


### Example

*Example 1 (with specified url)*

```js
louis({
  url: 'http://localhost:8000/',
  timeout: 200,
  performanceBudget: {
    request: 10
    domComplete: 3000
  }
})
```

*Example 2 (without url)*
This will launch a server and look for an **index.html** in the same folder as the gulpfile.js, then it will analyze the performance of this website.

```js
louis({
  timeout: 10,
  performanceBudget: {
    request: 10
    headersSize: 200
  }
})
```

### Output

*Output with specified performance budget*

![Screenshot1](http://oi62.tinypic.com/ay63nn.jpg)

*Output without specified performance budget*

![Screenshot1](http://oi59.tinypic.com/xg9us6.jpg)


### Options

**All options are optional**

* `url` url of the website to be analyzed, if it is not specified **Louis** will launch a server and load the **index.html** if this exist on the same directory as the **gulpfile.js**
* ` timeout ` timeout for the run (defaults to 15 seconds)
* `viewport dimensions ('1280x1024' is the default)
* `engine` webkit or gecko (webkit is default)
* `userAgent` default is Chrome/37.0.2062.120
* `noExternals` true or false, default is false, block requests to 3rd party domains
* `performanceBudget` object with metrics, see below

### Performance Budget Options

The performance budget option can contain some or all of these values:

  ```requests, gzipRequests, postRequests, httpsRequests, notFound, bodySize, contentLength, httpTrafficCompleted, timeToFirstByte, timeToLastByte, ajaxRequests, htmlCount, htmlSize, cssCount, cssSize, jsCount, jsSize, jsonCount, jsonSize, imageCount, imageSize, videoCount, videoSize, webfontCount, webfontSize, base64Count, base64Size, otherCount, otherSize, cacheHits, cacheMisses, cachePasses, cachingNotSpecified, cachingTooShort, cachingDisabled, oldCachingHeaders, consoleMessages, cookiesSent, cookiesRecv, domainsWithCookies, documentCookiesLength, documentCookiesCount, documentHeight, commentsSize, whiteSpacesSize, DOMelementsCount, DOMelementMaxDepth, nodesWithInlineCSS, imagesScaledDown, imagesWithoutDimensions, DOMidDuplicated, hiddenContentSize, DOMmutationsInsertsv, DOMmutationsRemoves, DOMmutationsAttributes, DOMqueries, DOMqueriesWithoutResults, DOMqueriesById, DOMqueriesByClassName, DOMqueriesByTagName, DOMqueriesByQuerySelectorAll , DOMinserts, DOMqueriesDuplicated, DOMqueriesAvoidable, domains, maxRequestsPerDomain, medianRequestsPerDomain, eventsBound, eventsDispatched, globalVariables, globalVariablesFalsy, headersCount, headersSentCount, headersRecvCount, headersSize, headersSentSize, headersRecvSize, headersBiggerThanContent, jQueryVersion, jQueryVersionsLoaded, jQueryOnDOMReadyFunctions, jQueryWindowOnLoadFunctions, jQuerySizzleCalls, jQueryEventTriggers, jQueryDOMReads, jQueryDOMWrites, jQueryDOMWriteReadSwitches, documentWriteCalls, evalCalls, jsErrors, closedConnections, localStorageEntries, redirects, redirectsTime, repaints, firstPaint, requestsToDomContentLoaded, requestsToDomComplete, assetsNotGzipped, assetsWithQueryString, assetsWithCookies, smallImages, smallCssFiles, smallJsFiles, multipleRequests, timeToFirstCss, timeToFirstJs, timeToFirstImage, domInteractive, domContentLoaded, domContentLoadedEnd, domComplete, timeBackend, timeFrontend, statusCodesTrail, windowAlerts, windowConfirms, windowPrompts, bodyHTMLSize, iframesCount, smallestResponse, biggestResponse, fastestResponse, slowestResponse, smallestLatency, biggestLatency, medianResponse, medianLatency```

  Example:
  ```js
  performanceBudget = {
    cssSize: 200
    jsSize: 2000
    consoleMessages: 0
    imageSize: 5000
    domContentLoaded: 2000
    smallestLatency: 1000
  }
  ```           


### Change log
#### [1.0.14] - 2015-11-23
Bug Fixes
-Fix path to phantomas command …
-Add missing gulp-connect dependency
-Change "main" script to "louis.js"

#### [1.0.10] - 2015-02-21
#### [1.0.9] - 2015-02-21
#### [1.0.8] - 2015-02-20
#### [1.0.7] - 2015-02-17
#### [1.0.0] - 2015-02-16


## License

Released under the MIT license.
