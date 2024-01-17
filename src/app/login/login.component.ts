import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  siginForm!: FormGroup;
  ngOnInit(): void {
    this.siginForm = new FormGroup({
      signInEmail: new FormControl(''),
      signInPassword: new FormControl(''),
    });
  }
  OnFormSubmited() {
    console.log(this.siginForm);
  }
}
