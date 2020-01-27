import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  x:string[]=["sharing from angular.... "];
  
  getData(a){
      this.x.push(a);
  }
  sendData(){
    return this.x;
  }
  //to make http req
  // ==> inject HttpClient object from injector
  constructor(private http:HttpClient) { }
  //==> make http req on that
 
  getUserData():Observable<object[]>{
    return this.http.get<object[]>('https://reqres.in/api/users');
  }

}
