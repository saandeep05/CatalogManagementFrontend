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
    email: new FormControl(''),
    password: new FormControl(''),
  });

  handleSubmit = (event:any):void => {
    console.log(this.registerForm.value);
    this.userService.register(this.registerForm).subscribe(
      data => {
        console.log(data);
        this.userService.storeInLocalStorage(data);
        this.router.navigateByUrl('/dashboard');
      }
    );
  }
}
