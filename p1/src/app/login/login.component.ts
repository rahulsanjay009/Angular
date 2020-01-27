import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("mentee").style.boxShadow="0 0 2px 0";
  }
  abc(){
    document.getElementById("mentee").style.boxShadow="0 0 2px 0";
    document.getElementById("mentor").style.boxShadow="0 0 0 0";
}
abc1(){
  document.getElementById("mentor").style.boxShadow="0 0 2px 0";
  document.getElementById("mentee").style.boxShadow="0 0 0 0";
}
}
