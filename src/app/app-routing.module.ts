import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

import { FeedbackComponent } from "./feedback/feedback.component";
import { ThankYouComponent } from "./thank-you/thank-you.component";

const routes: Routes = [
  { path: 'feedback', component: FeedbackComponent },
  { path: 'thank-you', component: ThankYouComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
