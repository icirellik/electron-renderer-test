const electron = require('electron');
const path = require('path');
const spawn = require('child_process').spawn;

const args = [
  path.join(__dirname, 'selector.js'),
];
let child = spawn(electron, args, {
  stdio: [ 'pipe', 'pipe', 'pipe', 'ipc' ],
});
child.stdout.pipe(process.stdout)
child.stderr.pipe(process.stderr);
process.stdin.pipe(child.stdin)

// Listen for ipc call, this should work fine.
child.on('message', (message) => {
  console.log(message)
});
