const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
  versions: process.versions,
  
  // Add any custom APIs you might need
  openExternal: (url) => {
    ipcRenderer.invoke('open-external', url);
  }
});

// Enhanced error handling
window.addEventListener('DOMContentLoaded', () => {
  console.log('Drug Wars Desktop loaded successfully');
});