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

  public seconds: number = 5;
  checkingStatus: boolean = true;

  ngOnInit(): void {
    this.activeRoute.params.subscribe((routeData) => {
      this.checkPaymentStatus(routeData['transactionId']);
    })
  }

  checkPaymentStatus(transactionId: string) {
    this.checkingStatus = true;
    this.paymentService.checkPaymentStatus(transactionId)
      .subscribe(response => {
        this.checkingStatus = false;
        console.log(response);
        var intervalId: any;
        intervalId = setInterval(() => {
          if(this.seconds < 0){
            this.seconds--;
          }
        }, 1000);
      });
  }

  openApp() {
    window.location.href = `testplus://payment-status/${'success'}`;
  }
}
