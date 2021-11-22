import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGuardService } from 'src/app/services/autenticador/admin-guard.service';
import { UserApiStoreService } from 'src/app/services/user-api/user-api-store.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private route: Router,
    private authService: AdminGuardService,
    private store: UserApiStoreService
  ) {}
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [Validators.required]);

  ngOnInit() {}
  login() {
    console.log(this.emailFormControl.value, this.passwordFormControl.value);
    this.authService
      .login(this.emailFormControl.value, this.passwordFormControl.value)
      .subscribe((response) => {
        this.store.setUser(response)
        console.log('User is logged in');

        this.route.navigateByUrl('/dashboard');
      });
      
  }
}
