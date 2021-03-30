import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-angular from Lance a future programmer';
  name: string = "Lance";
  myText: string = "Default myText string";

  changeName(): void {
    this.name = "Lancelot";
  }
}
