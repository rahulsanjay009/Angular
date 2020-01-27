import { Injectable } from '@angular/core';
import { Mentor } from './mentor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  profile:Mentor;
  readonly baseURL='http://localhost:3000/mentor';
  
  constructor(private http:HttpClient) { }
  postMentor(mentor:Mentor){
    return this.http.post(this.baseURL,mentor);
  }
  getMentor(){
    return this.http.get(this.baseURL);
  }
  reciveProfile(x:Mentor){
    this.profile=x;
  }
  sendToMentor(){
    return this.profile;
  }
 
}
