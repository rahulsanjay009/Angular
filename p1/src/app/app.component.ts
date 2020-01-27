import { Component } from '@angular/core';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';

import { UserService } from './shared/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NgbPopoverConfig]
})
export class AppComponent {
  src:String="./icon.png";
  constructor(private us:UserService,config: NgbPopoverConfig) {
    // customize default values of popovers used by this component tree
   
    config.autoClose='outside';
    config.popoverClass='pop';
  }

}
