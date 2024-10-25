import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { PaymentCallbackComponent } from './payment-callback/payment-callback.component';

export const routePaths = {
  payment: '',
  paymentCallback: 'payment/callback'
}

const routes: Routes = [
  {path: routePaths.payment, component: PaymentComponent},
  {path: `${routePaths.paymentCallback}/:transactionId`, component: PaymentCallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
