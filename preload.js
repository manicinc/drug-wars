// preload.js
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    // You can expose IPC functions here if your app needs them
});

console.log('Preload script executed.');