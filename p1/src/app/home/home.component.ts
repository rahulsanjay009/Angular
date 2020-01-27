import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user.model';
import {UserService} from '../shared/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:User[]=[];
  constructor(private us:UserService) { }

  ngOnInit() {
    this.refreshUser();
  }
  refreshUser(){
    this.us.getusers().subscribe((res)=>{
      this.users=res as User[];
   
    });
  }
  
}
