// Internal dependecies
var exec = require('child_process').exec;
var fs = require('fs');
var perfBudget = require('./performanceBudget');
// External dependecies
var _ = require('lodash');
var clc = require('cli-color');

// Build the phantomas command
// {options} object
function buildCommand(options){
  var command = 'phantomas ' + options.url;
  return command;
}

// Exucute and analyze the resuls
// {options} object
function analyze(options){
  command = buildCommand(options);

  exec(command + ' --reporter=json --run 1 > results.json', function(error, stdout, stderr){
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
            perfBudget.checkBudget(options.performanceBudget, data)
          }
          else{
            _.each(metrics, function(value, key){
              console.log(clc.green.bgWhite.underline(key) + clc.red.bgWhite.underline(value));
            });
          }
        });
    }
  });
}

module.exports = {
  analyze: analyze
}