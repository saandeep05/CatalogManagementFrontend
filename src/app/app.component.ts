import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'CatalogMngmtFrontend';
  username: String = '';

  ngOnInit() {
    if(localStorage.getItem('username') != null) {
      this.username = <String>localStorage.getItem('username');
    }
  }
}
