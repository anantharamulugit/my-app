import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';
import { AboutAddressComponent } from './about-address/about-address.component';
import { DirectorComponent } from './director/director.component';



@NgModule({
  declarations: [
    AboutCeoComponent,
    AboutAddressComponent,
    DirectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutCeoComponent
  ]
})
export class AboutusModule { }
