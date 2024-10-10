import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-direct',
  templateUrl: './user-direct.component.html',
  styleUrl: './user-direct.component.css'
})
export class UserDirectComponent implements OnInit {
  username: string;
  numRole: Number;

  ngOnInit(): void {
    this.username = <string>localStorage.getItem('username');
    this.numRole = (<string>localStorage.getItem('role')).split(',').length;
    console.log(this.username, this.numRole);
  }

  constructor() {
    this.username = <string>localStorage.getItem('username');
    this.numRole = (<string>localStorage.getItem('role')).split(',').length;
  }
}
