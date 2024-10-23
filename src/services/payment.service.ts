import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentUrl = 'https://node-phonepe-pg.vercel.app/initiate';
  private statusUrl = 'https://node-phonepe-pg.vercel.app/status';

  constructor(private http: HttpClient) { }

  initiatePayment(orderId: string, amount: number, callbackUrl: string): Observable<any> {
    const body = {
      orderId: orderId,
      amount: amount,
      callbackUrl: callbackUrl
    };
    return this.http.post(this.paymentUrl, body);
  }

  checkPaymentStatus(orderId: string): Observable<any> {
    return this.http.post(this.statusUrl, { orderId });
  }
}
