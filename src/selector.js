const app = require('electron').app;
const join = require('path').join;
const resolve = require('path').resolve;
const window = require('electron-window');

app.on('ready', () => {
  const win = window.createWindow({
    height: 480,
    show: false,
    width: 640,
    webPreferences: {
      allowRunningInsecureContent: true,
      nodeIntegration: true,
      experimentalFeatures: true,
      nodeIntegrationInWorker: true,
      webSecurity: false,
    }
  });

  win.webContents.on('crashed', async event => {
    console.log('electron browser window crashed', event);
  })

  win.webContents.once('dom-ready', () => {
    win.show();
    win.webContents.openDevTools();
  });

  const indexPath = resolve(join(__dirname, './renderer/index.html'));
  win._loadURLWithArgs(indexPath, {}, () => {});
});
