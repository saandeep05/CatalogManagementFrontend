import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  @Input() username: String = '';
  @Output() logout = new EventEmitter();
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadNavbar();
  }

  ngOnChanges() {
    this.loadNavbar();
  }

  loadNavbar(): void {
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
    this.logout.emit(this.username);
  }
}
