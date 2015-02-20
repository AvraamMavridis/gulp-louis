# Louis

**Louis** is a gulp task that is used to analyze the performance of a website against a performance budget.

[![npm version](https://badge.fury.io/js/gulp-louis.svg)](http://badge.fury.io/js/gulp-louis)

[![NPM](https://nodei.co/npm/gulp-louis.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gulp-louis/)

[![Build Status](https://travis-ci.org/AvraamMavridis/gulp-louis.svg?branch=master)](https://travis-ci.org/AvraamMavridis/gulp-louis)

**!! WARNING !! ** not stable yet, wait for version 2.0.0

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
#### 4. [Change log](#change-log)

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
```js
import louis = require('gulp-louis');

louis({
  url: 'http://localhost:8000/',
  runs: 2,
  timeout: 200,
  performanceBudget: {
    request: 10
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
* `timeout` timeout for the run (defaults to 15 seconds)
* `viewport dimensions ('1280x1024' is the default)
* `engine` webkit or gecko (webkit is default)
* `userAgent` default is Chrome/37.0.2062.120
* `noExternals` true or false, default is false, block requests to 3rd party domains
* `performanceBudget` object with metrics, see below

Louis accept an object of options

### Change log
#### [1.0.7] - 2015-02-20
##### Added
- Change log.

##### Changed
- Readme file

##### Fixed
- Fix Markdown.



## License

Released under the MIT license.
