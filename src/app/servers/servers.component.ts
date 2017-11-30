import { Component, OnInit } from '@angular/core';

@Component ( {

  selector: 'app-servers',
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']

} )
export class ServersComponent implements OnInit {

AllownewServer= false;
Addnewserver = 'no new server was created';
Servername = '';
Servercreated= false;
Servers =['test1','test2','test3'];


  constructor()  {
    setTimeout(() => {
  this.AllownewServer = true;
}, 5000);
  }


  ngOnInit() {
  }
  onCreateServer() {
      this.Servercreated = true;
      this.Servers.push(this.Servername);
    this.Addnewserver = ' ' + this.Servername;

  }
  onUpdateServerName(event: Event) {


    this.Servername = (<HTMLInputElement>event.target).value;
  }
 }
