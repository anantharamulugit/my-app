import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  public products:any=[
    {name:'shoes',price:100,rating:4.0,image:'nature2.jpg'},
    {name:'phone',price:200,rating:4.1,image:'ronature2.jpg'},
    {name:'laptop',price:300,rating:4.2,image:'nature2.jpg'},

  ]

}
