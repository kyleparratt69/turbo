import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Injectable } from '@angular/core';
import {PaymentObjectModel} from "../models/PaymentObjectModel.model";
import {TemplateObjectModelModel} from "../models/TemplateObjectModel.model";
import {CmsLoginModelModel} from "../models/CmsLoginModel.model";
import { UUID } from 'angular2-uuid';
import {BlogObjectModel} from "../models/BlogObjectModel.model";

@Injectable()
export class FirbaseDbService {
  private payment_Path: string = '/Payments';
  private template_Path: string = '/Templates';
  private cms_Login_Path: string = '/CMS_Login';
  private blog_Unnaproved_Path: string = '/BlogPosts_Unnaproved';

  public payments_Array: FirebaseListObservable<any[]>;
  public template_Array: FirebaseListObservable<any[]>;
  public cms_Login_Array: FirebaseListObservable<any[]>;
  public blogs_Unnaproved_Array: FirebaseListObservable<any[]>;

  constructor(private firebase_Connection_Instance: AngularFireDatabase) {
    this.payments_Array = firebase_Connection_Instance.list(this.payment_Path);
    this.template_Array = firebase_Connection_Instance.list(this.template_Path);
    this.cms_Login_Array = firebase_Connection_Instance.list(this.cms_Login_Path);
    this.blogs_Unnaproved_Array = firebase_Connection_Instance.list(this.blog_Unnaproved_Path);
  }

  public log_Payment_Record(payment_Record: PaymentObjectModel){
    const payment_Object = this.firebase_Connection_Instance.database.ref(`/${this.payment_Path}/${UUID.UUID()}`);
    payment_Object.set({"PaymentAmount": payment_Record.PaymentAmount,
      "PaymentMethod": payment_Record.PaymentMethod, "PaymentTimestamp": payment_Record.PaymentTimestamp});
  }

  public log_Template_Record(template_Record: TemplateObjectModelModel){
    const template_Object = this.firebase_Connection_Instance.database.ref(`/${this.template_Path}/${UUID.UUID()}`);
    template_Object.set({"TemplatePrice": template_Record.TemplatePrice,
      "TemplateName": template_Record.TemplateName, "TemplateDescription": template_Record.TemplateDescription,
      "TemplateHeroImageUrl": template_Record.TemplateHeroImageUrl, "TemplatePreviewImageUrl": template_Record.TemplatePreviewImageUrl});
  }

  public log_Blog_Unnaproved_Record(blog_Record: BlogObjectModel){
    const blog_Object = this.firebase_Connection_Instance.database.ref(`/${this.blog_Unnaproved_Path}/${UUID.UUID()}`);
    blog_Object.set({"TemplatePrice": blog_Record.BlogAuthor,
      "TemplateName": blog_Record.BlogHeading, "TemplateDescription": blog_Record.BlogImage,
      "TemplateHeroImageUrl": blog_Record.BlogContent, "TemplatePreviewImageUrl": blog_Record.BlogTimestamp});
  }

  public cms_Login(Cms_Login_Password: any, Cms_Login_Username: any): boolean {
    let Cms_Grant_Access: boolean = false;
    this.cms_Login_Array.subscribe(cms_Response_Object =>{
      let tempCmsLoginObject = new CmsLoginModelModel(cms_Response_Object[0]);
      if(tempCmsLoginObject){
        if (tempCmsLoginObject.CmsLoginPassword.toString() == Cms_Login_Password
        && tempCmsLoginObject.CmsLoginUsername.toString() == Cms_Login_Username){
          Cms_Grant_Access = true;
        }
      }
    });
    return Cms_Grant_Access;
  }

  public fetch_Payment_Records(): FirebaseListObservable<any[]> {
    return this.payments_Array;
  }

  public fetch_Template_Records(): FirebaseListObservable<any[]> {
    return this.template_Array;
  }

}
