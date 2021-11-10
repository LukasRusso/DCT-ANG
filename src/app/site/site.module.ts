import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SubscriptionPeageComponent } from './pages/subcription-page/subcription-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    DashboardPageComponent,
    HomePageComponent,
    SubscriptionPeageComponent,
  ],

  exports: [
    LoginPageComponent,
    DashboardPageComponent,
    HomePageComponent,
    SubscriptionPeageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [],
})
export class SiteModule {}
