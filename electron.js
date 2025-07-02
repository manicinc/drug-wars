const { app, BrowserWindow, Menu, shell, dialog } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');
const logger = require('electron-log');

// --- Basic Setup ---
const IS_MAC = process.platform === 'darwin';
const isDev = !app.isPackaged;
let mainWindow;

// Configure Logger
logger.transports.file.resolvePath = () => path.join(app.getPath('userData'), 'logs', 'main.log');
autoUpdater.logger = logger;
autoUpdater.logger.transports.file.level = 'info';
logger.info('App starting...');

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
        },
    });

    mainWindow.loadFile('index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
}

// --- Menu Template ---
const menuTemplate = [
    ...(IS_MAC ? [{
        label: app.name,
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            { label: 'Check for Updates...', click: () => autoUpdater.checkForUpdatesAndNotify() },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideOthers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
        ]
    }] : []),
    { role: 'fileMenu' },
    { role: 'editMenu' },
    { role: 'viewMenu' },
    {
        role: 'help',
        submenu: [{
            label: 'Learn More',
            click: async () => {
                await shell.openExternal('https://github.com/manicinc/drugwars');
            }
        }]
    }
];

// --- App Events ---
app.on('ready', () => {
    createWindow();
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);

    // Check for updates 5 seconds after launch
    if (!isDev) {
        setTimeout(() => autoUpdater.checkForUpdatesAndNotify(), 5000);
    }
});

app.on('window-all-closed', () => {
    if (!IS_MAC) {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});