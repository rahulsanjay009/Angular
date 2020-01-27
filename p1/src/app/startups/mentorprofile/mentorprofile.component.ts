import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/shared/mentor.service';
import { Mentor } from 'src/app/shared/mentor';

@Component({
  selector: 'app-mentorprofile',
  templateUrl: './mentorprofile.component.html',
  styleUrls: ['./mentorprofile.component.css']
})
export class MentorprofileComponent implements OnInit {
  profile:Mentor;
  constructor(private ms:MentorService) { }

  ngOnInit() {
    this.profile=this.ms.sendToMentor();
    console.log(this.profile);
  }
ss
}
