import { Component } from '@angular/core';
import { PaymentService } from 'src/services/payment.service';
import { routePaths } from '../app-routing.module';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  orderId: string = '';
  amount: number = 0;
  callbackUrl: string = `https://angular-phonepe.vercel.app/${routePaths.paymentCallback}`;

  constructor(private paymentService: PaymentService) { }

  initiatePayment() {
    this.paymentService.initiatePayment(this.orderId, this.amount, encodeURI(this.callbackUrl))
      .subscribe(response => {
        if (response.success) {
          // Redirect user to PhonePe gateway page or handle the response accordingly
          console.log(response.data)
          window.location.href = response.data.instrumentResponse.redirectInfo.url;
        } else {
          alert('Payment initiation failed');
        }
      });
  }
}