import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

    endpoint = ''
    constructor(private http: HttpClient) { }

    addVendor(data) {
        console.log(JSON.stringify(data));
        return this.http.post(`${this.endpoint}/users/`, data);
    }

}