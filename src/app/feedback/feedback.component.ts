import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from "@angular/common";

import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  formGroup: FormGroup
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[a-zA-Z ]*$')
      ])],
      companyName: ["", Validators.required],
      jobTitle: ["", Validators.required],
      yearsInCurrentRole: [0, Validators.compose([
        Validators.required,
        Validators.min(0),
        Validators.max(50)
      ])],
      likesInMarketingCorp: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000)
      ])]
    })
  }

  formSubmit(formData: string | boolean) {
    this.location.go("./thank-you");
  }
  goBack(): void {
    this.location.back();
  }
}
