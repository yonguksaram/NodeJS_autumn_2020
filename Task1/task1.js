const fs = require("fs");
const { Command, help } = require('commander');
const program = new Command();
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const parameterChecker = require("./helper/checkParameters");
const outputCreator = require("./helper/createOutput");

program
  .storeOptionsAsProperties(false);

program
  .option('-s, --shift <type>', 'shift')
  .option('-i, --input <type>', 'input file')
  .option('-o, --output <type>', 'output file')
  .option('-a, --action <type>', 'action');

program.parse(process.argv);
let options = program.opts();
parameterChecker.checkParameters(options);

if (options.input) {
    readline.close();
    fs.readFile(options.input, "utf8", 
        function(error,data) {
            if (error) {
                console.error('An error occured while reading the file.');
                return;
            }
            outputCreator.createOutput(data, Number(options.shift), options.action, options.output);
        }
    );
} else {
    readline.question('Please, enter your text:\n', data => {
        readline.close();
        outputCreator.createOutput(data, Number(options.shift), options.action, options.output);
    });
}