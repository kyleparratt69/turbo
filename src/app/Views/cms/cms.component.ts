import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FirbaseDbService} from "../../services/firbase-db.service";

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css'],
  providers:[FirbaseDbService]
})
export class CmsComponent implements OnInit {
  User_Logged_In: boolean = false;
  @ViewChild('input_Password') inputPassword: ElementRef;
  @ViewChild('input_Username') inputUsernamme: ElementRef;

  constructor(private cms_Login_Servcie: FirbaseDbService) { }

  ngOnInit() {
  }

  cmsLogin(){
    if(this.cms_Login_Servcie.cms_Login(this.inputPassword.nativeElement.value,
      this.inputUsernamme.nativeElement.value)){
      this.User_Logged_In = true;
    }
  }
}
