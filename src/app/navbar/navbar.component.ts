import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  @Input() username: String = '';
  isLoggedIn: boolean = false;

  ngOnInit() {
    if(this.username == '' || this.username == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
  }
}
