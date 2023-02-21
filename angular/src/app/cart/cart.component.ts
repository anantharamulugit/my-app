import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public name:string="";
  public price:number=0;
  public rating:number=0;
  public fredelivery:boolean=false;

  public term:string="";

  public products:any=[
    {name:'pen',price:10,rating:3,freedelivery:true},
    {name:'phone',price:100,rating:4.8,freedelivery:false},
    {name:'shirt',price:400,rating:3,freedelivery:true},
    {name:'cap',price:120,rating:2,freedelivery:false},
    {name:'mobile case',price:7000,rating:5,freedelivery:true},
    {name:'remote',price:200,rating:3.1,freedelivery:false},
    {name:'tv',price:22000,rating:4.1,freedelivery:true},
    {name:'headset',price:500,rating:3.3,freedelivery:false},
    {name:'pant',price:800,rating:4.9,freedelivery:true}
  ]


  search(){
    this.products=this.products.filter((product:any)=>product.name.indexOf(this.term) !=-1)
   };


    price1h(){
      this.products=this.products.sort((a:any,b:any)=>a.price-b.price);
    };
   price2h(){
    this.products=this.products.sort((a:any,b:any)=>b.price-a.price);
   };
   rating1(){
    this.products=this.products.sort((a:any,b:any)=>a.rating-b.rating);
   };
   rating2(){
    this.products=this.products.sort((a:any,b:any)=>b.rating-a.rating);
   };
   freedelivery(){
    this.products=this.products.filter(
      (product:any)=>product.freedelivery==true);
   };


   applydiscount(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price/2;
      return product;
    })
   }

  applydeliverycharges(){
    this.products=this.products.map((product:any)=>{
      if(product.freedelivery==true){
        product.price=product.price +20;
      }
      return product
    })
  }

  total(){
    var total= this.products.reduce((sum:any,product:any)=>sum+product.price,0);
    alert ("total price is Rs." +total)
  }

  totalcaritems(){
    alert("total cart items:"+this.products.length);
  }

  delete(i:any){
    this.products.splice(i,1)
  }

  add(){
    var product={
      name:this.name,
      price:this.price,
      rating:this.rating,
      freedelivery:this.fredelivery
    }
    this.products.push(product);
  }

}
