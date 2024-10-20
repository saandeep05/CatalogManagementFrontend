import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { UserResponse } from '../../../model/UserResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  @Output() flush = new EventEmitter<String>();

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  handleSubmit = (event: any) => {
    console.log(this.loginForm.value);
    this.userService.login(this.loginForm).subscribe(
      data => {
        console.log(data);
        this.userService.storeInLocalStorage(data);
        this.flush.emit(data.username);
        this.router.navigateByUrl('/dashboard');
      }
    );
  }
}
