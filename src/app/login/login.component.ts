import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  siginForm!: FormGroup;
  registerForm!: FormGroup;
  registerFormHidden: boolean = true;
  registerButtonHidden: boolean = false;
  errorMessage: string = '';
  ngOnInit(): void {
    this.siginForm = new FormGroup({
      signInEmail: new FormControl('', [Validators.required, Validators.email]),
      signInPassword: new FormControl('', [Validators.required]),
    });
    this.registerForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      surname: new FormControl(''),
      registerEmail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      emailRepeat: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      passwordRepeat: new FormControl('', Validators.required),
    });
  }
  constructor(private router: Router) {}

  OnSignInFormSubmited() {
    if (!this.siginForm.value.signInEmail.value || !this.siginForm.value.password.value) {
      this.errorMessage = "Email and/or password fields are empty."
    }
    if (this.siginForm.valid) {
      console.log(this.siginForm);
      this.router.navigate(['/home']);
    }
  }
  OnRegisterFormSubmited() {
    if (this.registerForm.valid) {
      console.log(this.registerForm);
      this.router.navigate(['/home']);
    }
  }

  toggleForm() {
    this.registerFormHidden = !this.registerFormHidden;
    this.registerButtonHidden = !this.registerButtonHidden;
  }
}
