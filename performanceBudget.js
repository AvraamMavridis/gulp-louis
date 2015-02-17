var clc = require('cli-color');

var checkBudget = function(budgetOptions, data){
  metrics = data.metrics;
  console.log('\n' + clc.black.bgWhiteBright('Metrics analyzed against performance budget') + '\n');

  var b_options = Object.keys(budgetOptions);
  var b_length = b_options.length;

  while(b_length--)
    if(metrics[b_options[b_length]] > budgetOptions[b_options[b_length]]){
      console.log(clc.whiteBright.bgRed(b_options[b_length] + ': ') + 
                  clc.red.bgWhiteBright(' Expected < ' + budgetOptions[b_options[b_length]]) + 
                  clc.red.bgWhiteBright.underline(' Actual = ' + metrics[b_options[b_length]]));
    }
    else{
      console.log(clc.whiteBright.bgGreen(b_options[b_length] + ': ') + 
                  clc.green.bgWhiteBright(' Expected < ' + budgetOptions[b_options[b_length]]) + 
                  clc.green.bgWhiteBright.underline(' Actual = ' + metrics[b_options[b_length]])); 
    }
    delete metrics[b_options[b_length]];
}

module.exports = checkBudget;