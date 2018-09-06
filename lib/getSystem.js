module.exports = getSystem;
const sys = process.env.SYSTEM; // macos, linux, windows

function getSystem() {
  let result = '';
  switch (sys) {
    case 'linux':
      result = 'linux';
      break;
    case 'windows':
      result = 'win32';
      break;
    default:
      result = 'darwin';
  }
  return result;
}
