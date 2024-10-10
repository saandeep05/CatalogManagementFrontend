import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../service/user.service';
import { UserResponse } from '../../model/UserResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userService: UserService = inject(UserService);

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  handleSubmit = (event: any) => {
    console.log(this.loginForm.value);
    let user:UserResponse = this.userService.login(this.loginForm);
    console.log(user);
  }
}
