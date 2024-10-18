import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-direct',
  templateUrl: './user-direct.component.html',
  styleUrl: './user-direct.component.css'
})
export class UserDirectComponent implements OnInit {
  username: string;
  numRole: Number = 0;

  ngOnInit(): void {
    this.username = <string>localStorage.getItem('username');
    if(this.username == null) {
      alert('Login first');
      this.router.navigateByUrl('/');
    }
    this.numRole = (<string>localStorage.getItem('role')).split(',').length;
    console.log(this.username, this.numRole);
  }

  constructor(private router: Router) {
    this.username = <string>localStorage.getItem('username');
    if(localStorage.getItem('role') == null) {
      this.numRole = 1;
    } else {
      this.numRole = (<string>localStorage.getItem('role')).split(',').length;
    }
  }
}
