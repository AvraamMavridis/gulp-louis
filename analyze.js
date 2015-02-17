// Internal dependecies
var exec = require('child_process').exec;
var fs = require('fs');
var checkBudget = require('./performanceBudget');

// External dependecies
var clc = require('cli-color');

// Config
var validate = require('./validate');

// Build the phantomas command
// {options} object
function buildCommand(options){
  validate(options);

  var command = 'phantomas ' + options.url;

  command += ' --engine ' + options.engine;
  command += ' --runs ' + options.runs;
  command += ' --timeout ' +  options.timeout;
  command += ' --viewport ' + options.viewport;

  return command;
}

// Exucute and analyze the resuls
// {options} object
function analyze(options){
  command = buildCommand(options);

  exec(command + ' --reporter=json > results.json', function(error, stdout, stderr){
    if(error !== null){
      console.log(error);
      return false;
    }
    else {
        fs.readFile('results.json', function(error, data){
          
          data = JSON.parse(data);
          metrics = data.metrics;

          //if the performanceBudget object is not empty analyze based on that
          if(Object.keys(options['performanceBudget']).length  > 0){
            checkBudget(options.performanceBudget, data)
          }
          else{
            var m = Object.keys(metrics);
            var m_length = m.length;
            while(m_length--){
              console.log(clc.green.bgWhite.underline(m[m_length]) + clc.red.bgWhite.underline(metrics[m[m_length]]));
            }
          }
        });
    }
  });
}

module.exports = analyze