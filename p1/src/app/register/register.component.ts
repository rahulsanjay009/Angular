import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../shared/user.service';
import { Router } from '@angular/router';


declare var M:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
 providers:[UserService]
})
export class RegisterComponent implements OnInit {
  
  constructor(private us:UserService,private router:Router) { }

  ngOnInit() {
    this.resetForm();
    document.getElementById("mentee").style.boxShadow="0 0 2px 0";
  }
  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.us.selectedUser={
      username:"",
      password:"",
      email:""
    }  
  }
  abc(){
    document.getElementById("mentee").style.boxShadow="0 0 2px 0";
    document.getElementById("mentor").style.boxShadow="0 0 0 0";
}
abc1(){
  document.getElementById("mentor").style.boxShadow="0 0 2px 0";
  document.getElementById("mentee").style.boxShadow="0 0 0 0";
}
  onSubmit(form : NgForm){
    this.us.postUser(form.value).subscribe((res)=>{
      this.resetForm(form);
      console.log('From OnSubmit');
      this.router.navigate(['/home']);
    });
  }

}
