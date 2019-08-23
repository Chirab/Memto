const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;


function createWindow () {

  mainWindow = new BrowserWindow({
    width: 900,
    height: 800,
    title: "Memto",
  }); // on définit une taille pour notre fenêtre

  mainWindow.loadURL(`file:Users/chirab/Desktop/delivery/MakerProject1/index.html`); // on doit charger un chemin absolu

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

  app.on('ready', createWindow); //appellation de la fonction createWindow

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') { //vérification macOs
        app.quit();
    }
  });

  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow();
    }
  });

