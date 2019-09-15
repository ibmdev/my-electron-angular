import { Component } from '@angular/core';
import { PouchdbService } from './services/pouchdb/pouchdb.service';
import { IpcRenderer } from 'electron';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Electron -WV';
  private ipc: IpcRenderer;
  constructor() {
    if ((window as any).require) {
      try {
        this.ipc = (window as any).require('electron').ipcRenderer;
      } catch (error) {
        throw error;
      }
    } else {
      console.warn('Could not load electron ipc')
    }
  }

  openwvApp() {
    console.log('Open WV');
    this.ipc.send('openwv');
  }
}
