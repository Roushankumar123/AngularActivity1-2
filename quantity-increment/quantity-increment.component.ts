import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})
export class QuantityIncrementComponent implements OnInit {
  //Declare variable for Counting on Button clicked.
  count:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  quantity:number=0;
  foodquantity:number=0;
  isDisable=true;
  
  // buttonDisabled:boolean=true;
  decrement(){
if(this.foodquantity!=0){
  this.foodquantity--;
  this.foodquantity=this.foodquantity;
}
else if(this.foodquantity>0){
  this.isDisable=false;
}

  }
  increment(){
    if(this.foodquantity!=10){
      this.foodquantity++;
      this.foodquantity=this.foodquantity;
    
      
    }
  }
  i=0;
  //button is called for minus
  plus(){
    if(this.i!=10){
      this.i++;
      this.quantity=this.i;
    }
  }
  //button is called for plus
  minus(){
    if(this.i!=1){
      this.i--;
      this.quantity=this.i
    }
  }
  msg:string="";
  onclick():void{
    this.msg="click me Button clicked";
    this.count++;
    
  }

}
