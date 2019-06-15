var electronInstaller = require('electron-winstaller');
var settings = {
    appDirectory: 'build/my-electron-angular-win32-x64',
    outputDirectory: 'build/my-electron-angular-installers',
    authors: 'KZO',
    exe: 'my-electron-angular.exe',
    description : 'test'
};

resultPromise = electronInstaller.createWindowsInstaller(settings);
 
resultPromise.then(() => {
    console.log("The installers of your application were succesfully created !");
}, (e) => {
    console.log(`Well, sometimes you are not so lucky: ${e.message}`,e);
});