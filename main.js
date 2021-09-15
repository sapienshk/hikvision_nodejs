const { app, BrowserWindow, ipcMain } = require('electron');
function createWindow () {
    const win = new BrowserWindow({
        width: 1600,
        height: 1000,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        },
        //frame: false
    })
    win.setMinimumSize(1600, 1000)
    win.loadFile("index.html");
    return win;
}
app.whenReady().then(
    ()=>{
        createWindow();
    }
);

