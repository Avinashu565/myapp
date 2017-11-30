
import {Component} from '@angular/core';


@Component({
selector : 'app-server',
templateUrl: './server.component.html',
styles : [`
p{
    color: black;
}
`]
})

export class ServerComponent {
    serverID= 4003;
    serverStatus= 'online';
    constructor(){
        this.serverStatus=Math.random()>0.5 ? 'Online' : 'ofline';
    }
    getServerStatus( ) {
        return this.serverStatus;

    }
    getColor(){
        return this.serverStatus === 'Online' ? 'green ' : 'red';
    }

}
