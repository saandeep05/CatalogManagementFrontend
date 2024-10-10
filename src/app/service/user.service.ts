import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserPayload } from '../../model/UserPayload';
import { UserResponse } from '../../model/UserResponse';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: String = "http://localhost:8080/api/user";
  response: UserResponse;

  constructor(private http: HttpClient) {
    this.response = new UserResponse('', '');
  }

  register = (form: FormGroup):UserResponse => {
    let user: UserPayload = new UserPayload(<String>form.value.username, <String>form.value.password);
    
    this.http.post<UserResponse>(this.baseURL + "/register", user).subscribe(
      data => {
        console.log(data);
        this.response = data;
      }
    );

    return this.response;
  }

  login(form: FormGroup): UserResponse {
    let user = new UserPayload(<String>form.value.username, <String>form.value.password);

    this.http.post<UserResponse>(this.baseURL + '/login', user).subscribe(
      data => {
        this.response = data;
        console.log(this.response);
      }
    );
    return this.response;
  }
}
