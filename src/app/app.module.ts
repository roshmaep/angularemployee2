import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"addemp",
    component:AddEmployeeComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"delete",
    component:DeleteComponent
  },
  {
    path:"edit",
    component:EditEmpComponent
  },
  {
    path:"view",
    component:ViewComponent
  },
  
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    EditEmpComponent,
    DeleteComponent,
    SearchComponent,
    ViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
