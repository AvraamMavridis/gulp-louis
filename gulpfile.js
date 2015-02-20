var gulp = require('gulp');
var louis = require('./louis');


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