var os = require('os');

var debug = require('debug')('neocore-selenium-drivers:env-details');

debug('Platform:', os.platform(), os.release());
debug('Architecture:', process.arch);
debug('Node.js:', process.version);
debug('process.env.SYSTEM:', process.env.SYSTEM);
debug('CWD:', process.cwd());
debug('Module Path:', __dirname);
debug('Package Version:', require('../package.json').version);
