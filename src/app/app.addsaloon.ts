// import {Component} from '@angular/core';
// import { Saloon } from './app.saloon';
// import {SaloonService} from './app.saloonservice';
// import {Router} from "@angular/router";
// @Component({
//     selector:'add-sal',
//     templateUrl:'addsaloon.html'
// })
// export class AddSaloon  {

//     //saloons:Saloon[];
//     model:any={};
//    // pro:any={id:1008,"name":"ABC","price":144.11,"description":"Good",inventory:{"id":109,
//     //"name":"Good"}}
//     constructor(private salservice:SaloonService){}
   
//     addSaloon(){
//         //console.log(this.model);
       
//         this.salservice.addsaloon(this.model).subscribe((data:any)=>console.log(data));
//         this.router.navigate(['customer']);
//     }
// }
import { Component, OnInit } from '@angular/core';
import {SaloonService} from './app.saloonservice';


@Component({
  selector: 'add-sal',
  templateUrl: './addsaloon.html',
  styleUrls: ['./addsaloon.scss']
})
export class AddSaloon implements OnInit {

 public isSaloonDetails = false;
  customers = [];
  customer = {
    id: 0,
    name: '',
    email:'',
    mobileNumber:0
  }
  saloon = {
    id: 0,
    name: '',
    phoneNumber: '',
    addressid: '',
    addressname: '',
    addresscity: '',
    addressstate: '',
    addresspostalcode: '',

  }
  constructor(private saloonservice: SaloonService) { }

  ngOnInit() {

  }

  markSaloonDetails() {
    console.log(this.saloon);
    this.isSaloonDetails = true;
  }

  addCustomer() {
    this.customers.push(this.customer);
    this.customer = {
        id: 0,
        name: '',
        email:'',
        mobileNumber:0
      }
  }

  submitSaloon() {
    this.saloon['custList'] = this.customers;

    console.log((this.saloon));

    this.saloonservice.addsaloon(this.saloon).subscribe(response =>
      console.log(JSON.stringify(response))
    )
  }
}
