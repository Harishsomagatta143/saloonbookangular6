import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { SaloonService } from './app.saloonservice';
import { AddSaloon } from './app.addsaloon';
@Component({
    selector:'search-sal',
    templateUrl:'searchsaloon.html'
})
export class SearchSaloon{
    errorMessage:any;
    
    saloonName: string;
   sal:AddSaloon[];
  
    constructor(private saloonService:SaloonService) { }
  
    
  
    searchSaloonName() {
       //console.log(this.saloonName);

      //this.router.navigate(['/home/saloon/' + this.searchSaloonName]);
this.saloonService.searchSaloon(this.saloonName).subscribe((data:any)=>this.sal=data);
    }
  

}