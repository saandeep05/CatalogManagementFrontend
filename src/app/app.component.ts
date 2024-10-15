import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'CatalogMngmtFrontend';
  username: String = '';
  router = inject(Router);
  
  // constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if(localStorage.getItem('username') != null) {
      this.username = <String>localStorage.getItem('username');
    }
  }

  handleFlush(username: String) {
    this.username = username;
  }
}
