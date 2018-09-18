const electron = require('electron');
const path = require('path');
const spawn = require('child_process').spawn;

(async () => {
  return new Promise(() => {
    const args = [
      path.join(__dirname, 'selector.js'),
    ];
    let child = spawn(electron, args, {
      stdio: [ 'pipe', 'pipe', 'pipe', 'ipc' ],
    });
    child.stdout.pipe(process.stdout)
    process.stdin.pipe(child.stdin)
    child.stderr.on('data', data => {
      process.stderr.write(data);
    });
  });
})();
