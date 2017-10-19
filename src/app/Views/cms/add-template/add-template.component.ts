import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FirbaseDbService} from "../../../services/firbase-db.service";
import {TemplateObjectModelModel} from "../../../models/TemplateObjectModel.model";

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css'],
  providers: [FirbaseDbService]
})
export class AddTemplateComponent implements OnInit {
  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputPrice') inputPrice: ElementRef;
  @ViewChild('inputDescription') inputDescription: ElementRef;
  @ViewChild('inputThumbnail') inputThumbnail: ElementRef;
  @ViewChild('inputPreview') inputPreview: ElementRef;

  constructor(private template_Log_Service: FirbaseDbService) { }

  ngOnInit() {
  }

  onAddTemplate(){
    let temp_Template_Object = new TemplateObjectModelModel({
      "TemplatePrice": this.inputPrice.nativeElement.value, "TemplateName": this.inputName.nativeElement.value,
      "TemplateDescription": this.inputDescription.nativeElement.value,"TemplatePreviewImageUrl": this.inputPreview.nativeElement.value,
      "TemplateHeroImageUrl": this.inputThumbnail.nativeElement.value
    });
    this.template_Log_Service.log_Template_Record(temp_Template_Object);
  }
}
