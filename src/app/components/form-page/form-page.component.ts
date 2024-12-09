import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule] // Ensure correct imports
})
export class FormPageComponent {
  feedbackForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form
    this.feedbackForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      suggestion: ['', [Validators.required]]
    });
  }

  // Getters to access form controls
  get formControls() {
    return this.feedbackForm.controls;
  }

  // Submit form
  onSubmit(): void {
    this.submitted = true;

    if (this.feedbackForm.invalid) {
      return;
    }

    alert('Thank you for your valuable suggestion!');
    this.feedbackForm.reset();
    this.submitted = false;
  }
}
