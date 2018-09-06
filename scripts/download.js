const install = require('../lib/install');

var ProgressBar = require('progress');
var bar;
var firstProgress = true;

const options = { progressCb };

install(options, installed);

function installed(err) {
  if (err) {
    throw err;
  }
}

function progressCb(total, progress, chunk) {
  if (firstProgress) {
    console.log('');
    console.log('');
    firstProgress = false;
  }

  bar =
    bar ||
    new ProgressBar('neocore-selenium-drivers installation [:bar] :percent :etas', {
      total: total,
      complete: '=',
      incomplete: ' ',
      width: 20,
    });

  bar.tick(chunk);
}
