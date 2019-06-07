import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';


//import {SaloonService} from './app.saloonservice';
@Injectable({
    providedIn:'root'
})
export class SaloonService{
constructor(private http:HttpClient){}


addsaloon(sall:any):any{
    console.log(sall);
    console.log(sall.custList);
    //console.log(sall);
    let ind:number=0;
    let input=new FormData();
    input.append("id",sall.id);
    input.append("name",sall.name);
    input.append("phoneNumber",sall.phoneNumber);
    input.append("address.id",sall.addressid);
    input.append("address.city",sall.addresscity);
    input.append("address.state",sall.addressstate);
    input.append("address.postalcode",sall.addresspostalcode);
    while(ind<sall.custList.length){
        input.append("customerList["+ind+"].id",sall.custList[ind].id);
        input.append("customerList["+ind+"].name",sall.custList[ind].name);
        input.append("customerList["+ind+"].email",sall.custList[ind].email);
        input.append("customerList["+ind+"].mobileNumber",sall.custList[ind].mobileNumber);
        ind++;
    }
    // input.append("customer.id",sall.customerid);
    // input.append("customer.name",sall.customername);
    // input.append("customer.email",sall.customeremail);
    // input.append("customer.mobileNumber",sall.customermobileNumber);

    return this.http.post('http://localhost:9094/saloon/add',input);
   
}
searchSaloon(sal:string){
   // return this.http.get("http://localhost:9098/saloon/search?name",{params:{}})
   let params=new HttpParams().set("name",sal)
   return this.http.get("http://localhost:9094/saloon/search",{params:params})
}
}