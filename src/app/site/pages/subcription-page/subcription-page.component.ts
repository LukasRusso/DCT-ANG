import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiStoreService } from 'src/app/services/user-api/user-api-store.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subcription-page.component.html',
  styleUrls: ['./subcription-page.component.css'],
})
export class SubscriptionPeageComponent implements OnInit {
  pageForm: FormGroup;
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private service: UserApiStoreService
  ) {
    this.pageForm = this.fb.group({
      email: ['', Validators.email],
      senha: ['', Validators.minLength],
    });
  }

  ngOnInit() {}

  createUser() {
    if (this.pageForm.valid) {
      this.service.createUser(this.pageForm.value as Usuario).subscribe(() => {
        this.route.navigateByUrl('/login');
        this.service.isLoged = true;
      });
      this.route.navigateByUrl('/login');
    } else {
      alert('Preencha o formulario Corretamente');
    }
  }
}
