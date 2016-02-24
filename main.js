/* eslint strict: 0 */
'use strict';
const electron = require('electron');
const ipcMain = electron.ipcMain;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const crashReporter = electron.crashReporter;
const shell = electron.shell;
let menu;
let template;
let mainWindow = null;

crashReporter.start();
if(!process.env.NODE_ENV){
    process.env.NODE_ENV = 'production';
}
if (process.env.NODE_ENV === 'dev') {
  require('electron-debug')();
}


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 1080, height: 728 });
  
  if (process.env.NODE_ENV === 'production') {
    mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
  } else {
    mainWindow.loadURL(`file://${__dirname}/src/index-dev.html`);//
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  if (process.env.NODE_ENV === 'dev') {
    mainWindow.openDevTools();
  }

  if (process.platform === 'darwin') {
     template=[];
  } else {
    template=[];
  }
  menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  mainWindow.setMenuBarVisibility(false)
});

