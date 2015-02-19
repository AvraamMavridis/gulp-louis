# Louis

**Louis** is a gulp task that is used to analyze the performance of a website against a performance budget.


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

### Change log
#### [0.0.1] - 2015-02-16
##### Added
- Change log.

##### Changed
- Readme file

##### Fixed
- Fix Markdown.



## License

Released under the MIT license.