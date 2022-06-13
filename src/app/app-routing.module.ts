import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutComponent } from './components/about/about.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { AnonymousGuard as Anonymous } from './shared/guard/anonymous.guard';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'home', component: LandingComponent, canActivate: [Anonymous] },
  { path: 'sign-in', component: SignInComponent, canActivate: [Anonymous] },
  { path: 'register-user', component: SignUpComponent, canActivate: [Anonymous] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [Anonymous] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [Anonymous]},
  { path: 'contact', component: ContactUsComponent, canActivate: [Anonymous]},
  { path: 'about', component: AboutComponent, canActivate: [Anonymous]},
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
