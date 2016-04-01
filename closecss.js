#!/usr/bin/env node

(function() {
  var cli       = require('cli');
  var fs        = require('fs');
  var closecss  = require('./index');
   
  //check if has been included by another module
  if(!module.parent) {
    cli.enable('version', 'status', 'glob');

    cli.parse({
      input: [ 'i', 'Source path to process close files', 'file', './src'], 
      output: [ 'o', 'Destination path for compiled CSS output', 'file', './dest'], 
    });
  
    cli.main(function(args, options) {
      var progress = 0;
      var numfiles = 0;

      console.log('Getting closer...\n');

      if (!fs.existsSync(options.output)){
          fs.mkdirSync(options.output);
      }
      args.forEach(function(element, index, array){
        if(element.indexOf('.close') < 1) return;

        numfiles++;

        cli.progress(numfiles * 1.0/args.length);

        var tokens = element.split('/');
        var filename = tokens[tokens.length -1].replace('.close', '');
        var target = (options.output.lastIndexOf('/') === options.output.length -1) ?
                        options.output + filename + '.css' :
                        options.output + '/' + filename + '.css';


        var css = fs.readFile(element, 'utf-8', function (err, data){
          if(err) return console.log(err);
          closecss
            .process(data, {from: element, to: target})
            .then(function(result) {
              fs.writeFile(target, result);
            });
        });
      });

      console.log('\nStatus: ' + numfiles + ' Files Completed');
      console.log('\nSummary: Who cares...CLOSE ENOUGH!!');
    });
  }
}());
