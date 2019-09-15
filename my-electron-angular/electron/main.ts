import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';
import * as fs from 'fs';

let win: BrowserWindow;
let winGoogle: BrowserWindow;
const log = require('electron-log');


app.on('ready', createWindow);

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true },
  });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/../../dist/my-electron-angular/index.html`),
      protocol: 'file:',
      slashes: true,
    }),
  );

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

ipcMain.on('getFiles', (event, arg) => {
  const files = fs.readdirSync(__dirname);
  win.webContents.send('getFilesResponse', files);
});

/** WV */
ipcMain.on('openwv', () => {
  log.info('Hello, log');
  winGoogle = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: false },
  });
  winGoogle.webContents.openDevTools();
  winGoogle.webContents.session.cookies.addListener('changed', (event, cookie, cause, remove) => {
    log.info('Le cookie ' + cookie.name + ' a changé ' + '--> ' + cause);
    if (remove === true) {
      log.info('Le cookie ' + cookie.name + ' a été supprimé ');
    }
  });
  winGoogle.loadURL('https://www.services-smavie.net/monEspaceClient/accueilSoc.pu?domaine=VIE&univers=PART&canal=DIRECT');
  winGoogle.show();
});


