import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { UserPayload } from '../../../model/UserPayload';
import { UserResponse } from '../../../model/UserResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  handleSubmit = (event:any):void => {
    console.log(this.registerForm.value);
    let user: UserResponse = this.userService.register(this.registerForm);
    console.log(user);
    this.router.navigateByUrl('/dashboard');
  }
}
