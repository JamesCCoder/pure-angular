import { Component } from '@angular/core';

@Component({
  selector: 'server-app',
  templateUrl: './server.component.html',
  styleUrls: [ './server.component.css' ]
})
export class ServerComponent  {
  word : String = "test interpolation";
  sentence : String = "This is a sentence";
}