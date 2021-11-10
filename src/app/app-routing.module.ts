import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuardService } from './services/autenticador/admin-guard.service';
import { AssessmentPageComponent } from './site/pages/assessment-page/assessment-page.component';
import { DashboardPageComponent } from './site/pages/dashboard-page/dashboard-page.component';
import { ForumPageComponent } from './site/pages/forum-page/forum-page.component';
import { HomePageComponent } from './site/pages/home-page/home-page.component';
import { LoginPageComponent } from './site/pages/login-page/login-page.component';
import { SubscriptionPeageComponent } from './site/pages/subcription-page/subcription-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },

  { path: 'teste', component: AssessmentPageComponent },
  { path: 'forum', component: ForumPageComponent },

  {
    path: 'cadastro',
    component: SubscriptionPeageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
