export class TemplateObjectModelModel {
  public TemplatePrice: any;
  public TemplateName: any;
  public TemplateDescription: any;
  public TemplateHeroImageUrl: any;
  public TemplatePreviewImageUrl: any;

  constructor(templateObject: any){
    this.TemplateDescription = templateObject.TemplateDescription;
    this.TemplateName = templateObject.TemplateName;
    this.TemplatePrice = templateObject.TemplatePrice;
    this.TemplateHeroImageUrl = templateObject.TemplateHeroImageUrl;
    this.TemplatePreviewImageUrl = templateObject.TemplatePreviewImageUrl;
  }
}
