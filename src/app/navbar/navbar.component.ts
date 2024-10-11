import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  @Input() username: String = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if(this.username == '' || this.username == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
  }

  ngOnChanges() {
    if(this.username == '' || this.username == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
  }

  handleLogout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.username = '';
    this.isLoggedIn = false;
    this.router.navigateByUrl('/');
  }
}
