import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsAddComponent } from './components/clients-add/clients-add.component';
import { ClientsEditComponent } from './components/clients-edit/clients-edit.component';


const routes: Routes = [
  { path: "", redirectTo: '/clients', pathMatch: 'full', canActivate: [AuthGuard] },
  { path : "clients", component: ClientsListComponent, canActivate: [AuthGuard] },
  { path : "clients/create", component: ClientsAddComponent, canActivate: [AuthGuard] },
  { path : "clients/edit/:id", component: ClientsEditComponent, canActivate: [AuthGuard] },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
