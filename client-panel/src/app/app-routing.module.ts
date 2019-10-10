import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsAddComponent } from './components/clients-add/clients-add.component';
import { ClientsEditComponent } from './components/clients-edit/clients-edit.component';


const routes: Routes = [
  { path: "", redirectTo: '/clients', pathMatch: 'full' },
  { path : "clients", component: ClientsListComponent },
  { path : "clients/create", component: ClientsAddComponent },
  { path : "clients/edit/:id", component: ClientsEditComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
