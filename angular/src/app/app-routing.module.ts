import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutheticationGuard } from './authetication.guard';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CartComponent } from './cart/cart.component';
import { CompanyComponent } from './company/company.component';
import { CreatVehicleComponent } from './creat-vehicle/creat-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmailComponent } from './email/email.component';
import { EmployesComponent } from './employes/employes.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GradeComponent } from './grade/grade.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PhoneComponent } from './phone/phone.component';
import { PhotoComponent } from './photo/photo.component';
import { ProductComponent } from './product/product.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { RegistetionComponent } from './registetion/registetion.component';
import { StudentTaskComponent } from './student-task/student-task.component';
import { StudentComponent } from './student/student.component';
import { TaskComponent } from './task/task.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  {path: "dashboard", component: DashboardComponent, canActivate:[], children: [
      { path: 'home', component: HomeComponent },
      {path:'data-binding',component:DataBindingComponent},
      {path: "calculator", component: CalculatorComponent },
      {path:'rectangle',component:RectangleComponent},
      {path:'grade',component:GradeComponent},
      {path:'registetoin',component:RegistetionComponent},
      {path:'registetion',component:RegistetionComponent},
      {path:'directives',component:DirectivesComponent},
      {path:'employes',component:EmployesComponent},
      {path:'product',component:ProductComponent},
      {path:'company',component:CompanyComponent},
      {path:'cart',component:CartComponent},
      {path:'student',component:StudentComponent},
      {path:'phone',component:PhoneComponent},
      {path:'vehicle',component:VehicleComponent},
      {path:'flipkart',component:FlipkartComponent},
      {path:'bank',component:BankComponent},
      {path:"creat-vehicle",component:CreatVehicleComponent},  //same component
      {path:'student-task',component:StudentTaskComponent},
      {path:'task',component:TaskComponent},
      {path:'email',component:EmailComponent},
      {path:'photo',component:PhotoComponent},  
      {path:'create-user',component:CreateUserComponent},
      {path:'vehicle-details/:id',component:VehicleDetailsComponent},
      {path:'edit-vehicle/:id',component:CreatVehicleComponent}   //same component

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
