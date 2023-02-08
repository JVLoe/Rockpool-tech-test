import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterOutlet,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
