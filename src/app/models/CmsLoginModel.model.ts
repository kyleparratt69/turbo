export class CmsLoginModelModel {
  public CmsLoginPassword: any;
  public CmsLoginUsername: any;
  public CmsLoginRole: any;

  constructor(CmsLoginObject: any){
    if(CmsLoginObject){
      this.CmsLoginPassword = CmsLoginObject.password;
      this.CmsLoginUsername = CmsLoginObject.username;
      this.CmsLoginRole = CmsLoginObject.role;
    }
  }
}
