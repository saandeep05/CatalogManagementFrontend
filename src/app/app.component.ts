import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CatalogMngmtFrontend';
  username: String = '';

  constructor() {
    if(localStorage.getItem('username') != null) {
      this.username = <String>localStorage.getItem('username');
    }
  }
}
