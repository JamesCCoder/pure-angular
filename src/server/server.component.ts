import { Component } from '@angular/core';

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
}