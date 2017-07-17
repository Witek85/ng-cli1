import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = "No server created";
  serverName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
		setTimeout(() =>{
			this.allowNewServer = true;
		}, 3000)
  }

  onCreateServer() {
  	console.log('works');
    this.serverCreated = true;
    this.servers.push(this.serverName);  
  	this.serverCreationStatus = "Server created";
  } 

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
