import { Component, OnInit } from '@angular/core';

@Component({
  //<!-- export a component by selecting an element -->
  //selector: 'app-servers',

  //<!-- export a component by attribute selector -->
  //selector: '[app-servers]',

  //<!-- import a component by class selector -->
  selector: '.app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server Was Created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreatedServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Was Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName  = (<HTMLInputElement>event.target).value;
  }

}
