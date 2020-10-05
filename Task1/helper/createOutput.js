const fs = require("fs");
const textProcessor = require("./processText");

module.exports = {
    createOutput: function (inputText, shift, operation, output) {
        let result = textProcessor.processText(inputText, shift, operation);
        if (fs.existsSync(output)) {
            fs.appendFileSync(output, result);
        } else {
            console.log(result);
        }
    }
}