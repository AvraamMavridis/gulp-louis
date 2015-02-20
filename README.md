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
#### 3. [Change log](#change-log)

## Getting Started


### Usage

```bash
$ npm install --save-dev gulp-louis
```

```js
import louis = require('gulp-louis');
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
