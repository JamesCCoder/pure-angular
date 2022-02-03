import { Component } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { Server } from './server.model';

@Component({
  selector: 'server-app',
  templateUrl: './server.component.html',
  styleUrls: [ './server.component.css' ]
})
export class ServerComponent  {
  word : String = "test interpolation";
  status: String = "This is not true";
  getWord(){
    return this.word;
  }
  setup : String = "_blank";
  myFunction(){
    this.status = "This is true";
  }

  serverCreated : boolean = false;
  myFunctionTurn(){
    this.serverCreated = !this.serverCreated;
  }

  getColor(){
    return this.serverCreated == true ? "green" : "red";
  }

  servers : Server[] = [
    new Server("Server1", "a new Server")
  ];
}