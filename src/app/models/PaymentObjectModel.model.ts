export class PaymentObjectModel {
  public PaymentAmount: any;
  public PaymentMethod: any;
  public PaymentTimestamp: any;
  public PaymentId: any;

  constructor(paymentObject: any){
    if(paymentObject){
      this.PaymentMethod = paymentObject.PaymentMethod;
      this.PaymentAmount = paymentObject.PaymentAmount;
      this.PaymentTimestamp = paymentObject.PaymentTimestamp;
      this.PaymentId = paymentObject.$key
    }
  }
}
