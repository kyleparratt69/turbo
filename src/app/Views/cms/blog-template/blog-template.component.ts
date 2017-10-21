import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BlogObjectModel} from "../../../models/BlogObjectModel.model";
import {FirbaseDbService} from "../../../services/firbase-db.service";

@Component({
  selector: 'app-blog-template',
  templateUrl: './blog-template.component.html',
  styleUrls: ['./blog-template.component.css'],
  providers: [FirbaseDbService]
})
export class BlogTemplateComponent implements OnInit {
  @ViewChild('inputHeading') inputHeading : ElementRef;
  @ViewChild('inputAuthor') inputAuthor : ElementRef;
  @ViewChild('inputImage') inputImage : ElementRef;
  @ViewChild('inputContent') inputContent : ElementRef;

  constructor(private Blog_Service: FirbaseDbService) { }

  ngOnInit() {
  }

  onBlogSubmit(){
    let tempBlogObject = new BlogObjectModel({
      "BlogHeading": this.inputHeading.nativeElement.value,
      "BlogAuthor": this.inputAuthor.nativeElement.value,
      "BlogContent": this.inputContent.nativeElement.value,
      "BlogImage": this.inputImage.nativeElement.value,
      "BlogTimestamp": "1",
    });
    this.Blog_Service.log_Blog_Unnaproved_Record(tempBlogObject);
  }
}
