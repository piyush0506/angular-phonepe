import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/services/payment.service';

@Component({
  selector: 'app-payment-callback',
  templateUrl: './payment-callback.component.html',
  styleUrls: ['./payment-callback.component.css']
})
export class PaymentCallbackComponent implements OnInit{

  constructor(private paymentService: PaymentService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((routeData) => {
      this.checkPaymentStatus(routeData['transactionId']);
    })
  }

  checkPaymentStatus(transactionId: string) {
    this.paymentService.checkPaymentStatus(transactionId)
      .subscribe(response => {
        console.log(response);
      });
  }
}
