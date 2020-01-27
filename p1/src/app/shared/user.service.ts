import { Injectable } from '@angular/core';
import {User } from './user.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  selectedUser : User;
  users:User[];
  readonly baseURL='http://localhost:3000/users';
  constructor(private http:HttpClient) { }
  postUser(user:User){
    return this.http.post(this.baseURL,user);
  }
  getusers(){
    return this.http.get<User[]>(this.baseURL);
  }
 
}
