const fs = require("fs");

module.exports = {
    checkParameters: function(options) {
        if (!options.shift || !options.action) {
            let e = new Error('Required parameters were missed');
            e.code = 'ERR_MISSING_ARGS';
            throw e;
        }

        if (options.input && !fs.existsSync(options.input)) {
            let e = new Error('Invalid path to input file');
            e.code = 'ERR_INVALID_ARG_VALUE';
            throw e;
        }
        
        if (options.input && !fs.existsSync(options.output)) {
            let e = new Error('Invalid path to output file');
            e.code = 'ERR_INVALID_ARG_VALUE';
            throw e;
        }
    }
}