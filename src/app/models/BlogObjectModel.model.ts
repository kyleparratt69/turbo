export class BlogObjectModel {
  public BlogHeading: any;
  public BlogAuthor: any;
  public BlogImage: any;
  public BlogContent: any;
  public BlogTimestamp: any;

  constructor(blogObject: any){
    this.BlogHeading = blogObject.BlogHeading;
    this.BlogAuthor = blogObject.BlogAuthor;
    this.BlogImage = blogObject.BlogImage;
    this.BlogContent = blogObject.BlogContent;
    this.BlogTimestamp = blogObject.BlogTimestamp;
  }
}
