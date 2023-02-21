import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { GradeComponent } from './grade/grade.component';
import { RegistetionComponent } from './registetion/registetion.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployesComponent } from './employes/employes.component';
import { ProductComponent } from './product/product.component';
import { CompanyComponent } from './company/company.component';
import { CartComponent } from './cart/cart.component';
import { StudentComponent } from './student/student.component';
import { PhoneComponent } from './phone/phone.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import{HttpClientModule} from '@angular/common/http';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { BankComponent } from './bank/bank.component';
import { CreatVehicleComponent } from './creat-vehicle/creat-vehicle.component';
import { StudentTaskComponent } from './student-task/student-task.component';
import { TaskComponent } from './task/task.component';
import { EmailComponent } from './email/email.component';
import { PhotoComponent } from './photo/photo.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    CalculatorComponent,
    DataBindingComponent,
    RectangleComponent,
    GradeComponent,
    RegistetionComponent,
    DirectivesComponent,
    EmployesComponent,
    ProductComponent,
    CompanyComponent,
    CartComponent,
    StudentComponent,
    PhoneComponent,
    VehicleComponent,
    FlipkartComponent,
    BankComponent,
    CreatVehicleComponent,
    StudentTaskComponent,
    TaskComponent,
    EmailComponent,
    PhotoComponent,
    CreateUserComponent,
    VehicleDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
