import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ClientService } from './services/client.service';
import { DetailsComponent } from './components/details/details.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { CalendarComponent } from './components/calendar/calendar.component';


const routes: Routes = [
  {path:'', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'calendar',component: CalendarComponent, canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'client/add', component: AddClientComponent, canActivate:[AuthGuard]},
  {path:'client/:id', component: DetailsComponent, canActivate:[AuthGuard]},
  {path:'client/edit/:id', component: EditClientComponent, canActivate:[AuthGuard]},
  {path:'**', component: PageNotFoundComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
