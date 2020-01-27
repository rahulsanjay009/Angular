import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { StartupsComponent } from './startups/startups.component';
import { LoginmenteeComponent } from './login/loginmentee/loginmentee.component';
import { LoginmentorComponent } from './login/loginmentor/loginmentor.component';
import { RegistermenteeComponent } from './register/registermentee/registermentee.component';
import { RegistermentorComponent} from './register/registermentor/registermentor.component';
import { MentorprofileComponent } from './startups/mentorprofile/mentorprofile.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent,children:[ {path:'',component:LoginmenteeComponent},
  {path:'loginmentee',component:LoginmenteeComponent},
  {path:'loginmentor',component:LoginmentorComponent}]},
  {path:'register',component:RegisterComponent,children:[ {path:'',component:RegistermenteeComponent},
    {path:'registermentor',component:RegistermentorComponent},
    {path:'registermentee',component:RegistermenteeComponent}
  ]},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'startups',component:StartupsComponent},
  {path:'startups/profile',component:MentorprofileComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {    }
