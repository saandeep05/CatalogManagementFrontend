import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserPayload } from '../../model/UserPayload';
import { UserResponse } from '../../model/UserResponse';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: String = "http://localhost:8080/api/user";
  response: UserResponse;

  constructor(private http: HttpClient) {
    this.response = new UserResponse('', '', '');
  }

  register = (form: FormGroup):Observable<UserResponse> => {
    let user: UserPayload = new UserPayload(<String>form.value.username, <String>form.value.email, <String>form.value.password);
    
    return this.http.post<UserResponse>(this.baseURL + "/register", user);
  }

  login(form: FormGroup): Observable<UserResponse> {
    let user = new UserPayload(<String>form.value.username, <String> form.value.email, <String>form.value.password);

    return this.http.post<UserResponse>(this.baseURL + '/login', user);
  }

  storeInLocalStorage(user: UserResponse) {
    localStorage.setItem('username', <string>user.username);
    localStorage.setItem('token', <string>user.token);
    localStorage.setItem('role', <string>user.role);
  }
}
