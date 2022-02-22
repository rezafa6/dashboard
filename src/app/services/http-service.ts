import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({providedIn:'root'})

export class MainDataHttpService {
    constructor(private http: HttpClient) { }
    env = environment;
    getData() {
        return new Promise((resolve , rejects) => {
            this.http.get(this.env.baseURL).subscribe(
                res => {resolve(res)},
                err => {rejects(err)}
            )
        } )
    }
}