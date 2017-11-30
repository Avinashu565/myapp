import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']

  styles : [`
  h1{
    color : blue;
  }
   h2{
    padding : 50px;
    background-color : rose;
    border: 1px solid red;
    color : violet;

   }
  `
]
})
export class AppComponent {
secret= false;
log=[];
  onToogle(event : Event){


    this.secret = !this.secret;
    // this.log.push(this.log.length + 1);
    // Displaying present date and time
    this.log.push(new Date());

  }
}
