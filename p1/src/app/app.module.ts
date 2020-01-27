import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StartupsComponent } from './startups/startups.component';
import { LoginmentorComponent } from './login/loginmentor/loginmentor.component';
import { LoginmenteeComponent } from './login/loginmentee/loginmentee.component';
import { RegistermenteeComponent } from './register/registermentee/registermentee.component';
import { RegistermentorComponent } from './register/registermentor/registermentor.component';
import { MentorprofileComponent } from './startups/mentorprofile/mentorprofile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    AboutusComponent,
    ContactusComponent,
    StartupsComponent,
    LoginmentorComponent,
    LoginmenteeComponent,
    RegistermenteeComponent,
    RegistermentorComponent,
    MentorprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
