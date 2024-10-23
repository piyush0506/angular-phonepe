import { Component } from '@angular/core';
import { PaymentService } from 'src/services/payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orderId: string = '';
  amount: number = 0;
  callbackUrl: string = 'http://localhost:4200/payment/callback';

  constructor(private paymentService: PaymentService) { }

  initiatePayment() {
    this.paymentService.initiatePayment(this.orderId, this.amount, this.callbackUrl)
      .subscribe(response => {
        if (response.success) {
          // Redirect user to PhonePe gateway page or handle the response accordingly
          console.log(response.data)
          // window.location.href = response.data.paymentUrl;
        } else {
          alert('Payment initiation failed');
        }
      });
  }

  checkPaymentStatus() {
    this.paymentService.checkPaymentStatus(this.orderId)
      .subscribe(response => {
        if (response.success) {
          alert('Payment Status: ' + response.data.status);
        } else {
          alert('Failed to fetch payment status');
        }
      });
  }
}
