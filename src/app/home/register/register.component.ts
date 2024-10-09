import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  handleSubmit = (event:any):void => {
    console.log(this.registerForm.value);
  }
}
