import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Import Routes and RouterModule
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { MechanicListComponent } from './mechanic-list/mechanic-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MechanicDetailsComponent } from './mechanic-details/mechanic-details.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'mechanic-list', component: MechanicListComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'mechanic-details/:id', component: MechanicDetailsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
