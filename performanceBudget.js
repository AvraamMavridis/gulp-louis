var _ = require('lodash');
var clc = require('cli-color');

var checkBudget = function(budgetOptions, data){
  metrics = data.metrics;
  console.log('\n' + clc.black.bgWhiteBright('Metrics analyzed against performance budget') + '\n');
  _.each(budgetOptions, function(value, key){
    if(metrics[key] > value){
      console.log(clc.whiteBright.bgRed(key + ': ') + 
        clc.red.bgWhiteBright(' Expected < ' + value) + 
        clc.red.bgWhiteBright.underline(' Actual = ' + metrics[key]));
    }
    else{
      console.log(clc.whiteBright.bgGreen(key + ': ') + 
        clc.green.bgWhiteBright(' Expected < ' + value) + 
        clc.green.bgWhiteBright.underline(' Actual = ' + metrics[key])); 
    }
    delete metrics[key];
  });

  console.log('\n \n' + clc.black.bgWhiteBright('Other metrics') + '\n');
  _.each(metrics, function(value, key){
      var print = _.padRight(key + ' : ' + value, 35);
      console.log(clc.white.bgBlueBright(print));
  });

}

module.exports = {
  checkBudget: checkBudget
}