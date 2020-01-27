import { Component, OnInit } from '@angular/core';
import { Mentor } from '../shared/mentor';
import { MentorService } from '../shared/mentor.service';
import { range } from 'rxjs';

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.css']
})
export class StartupsComponent implements OnInit {
  selectedMentor:Mentor[]=[];
  dept:any[]=["cse","IT","Automobile","Mechanical","Electrical","ece","Civil"];
  selectedDept:any[]=[];
  constructor(private ms:MentorService) { }
  ngOnInit() {
    this.display();
  }
  display(){
    this.ms.getMentor().subscribe((data:any)=>{
      this.selectedMentor.push(...data);
    });
    
  }
  sendProfile(x:Mentor){
     this.ms.reciveProfile(x);
  }
  
  checkedDepts(event:any){
    if(event.target.checked==true)
      this.selectedDept.push(event.target.value);
    else{
       const index:number=this.selectedDept.indexOf(event.target.value);
       if(index!=-1)
        this.selectedDept.splice(index,1);
    }  
    this.selectedMentor.splice(0,this.selectedMentor.length);
    this.return();
  }
  return(){
    this.ms.getMentor().subscribe((data:any)=>{
      this.selectedMentor.push(...data);
    });
    
  }
  applyFilter(){
    console.log(this.selectedDept);
    if(this.selectedDept.length==0){
      this.selectedMentor.splice(0,this.selectedMentor.length);
      this.display();
    }
    else{
      
      this.selectedMentor=this.selectedMentor.filter(x=>{
        const f:Mentor[]=[];
        for(let i in this.selectedDept)
        if(x['dept']==i)
          f.push(x);
        console.log(f);
        return f;  
      });
    }
    console.log(this.selectedMentor);
  }
}
