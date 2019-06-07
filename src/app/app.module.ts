import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AddSaloon} from './app.addsaloon';
import {SearchSaloon} from './app.searchsaloon';
import {FormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
const route:Routes=[
    {path:"add",component:AddSaloon},
    {path:"search",component:SearchSaloon},
    ];
@NgModule({
    imports: [
        BrowserModule,RouterModule.forRoot(route),FormsModule,HttpClientModule,HttpModule
        
    ],
    declarations: [
        AppComponent,AddSaloon,SearchSaloon
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }