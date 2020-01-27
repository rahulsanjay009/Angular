import { Component, OnInit } from '@angular/core';
import { Mentor } from 'src/app/shared/mentor';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { MentorService } from 'src/app/shared/mentor.service';
import{NgForm} from '@angular/forms';
@Component({
  selector: 'app-registermentor',
  templateUrl: './registermentor.component.html',
  styleUrls: ['./registermentor.component.css']
})
export class RegistermentorComponent implements OnInit {
  registermentorForm:FormGroup;

  constructor(private  ms:MentorService,private fb:FormBuilder) { }

  ngOnInit() {
    this.registermentorForm=this.fb.group({
      firstname:new FormControl(''),
      lastname:new FormControl(''),
      phoneno:new FormControl(''),
      password:new FormControl(''),
      email:new FormControl(''),
      dept:new FormControl(''),
      college:new FormControl(''),
      city:new FormControl('')
    });
}
  
  onSubmit(mentor){
    console.log(mentor);
    this.ms.postMentor(mentor).subscribe((res)=>{
      console.log("Registered successfully");  
    });
  }
}
