import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MainDataHttpService } from './http-service';

@Injectable({ providedIn: 'root' })

export class ManageDataService {

    constructor(
        private mainDataHttpService: MainDataHttpService) { }

    env = environment;
    data: any;
    dataStatus = false
    getDataAndSetStatus() {
        this.mainDataHttpService.getData().then(
            res => {
                console.log(res)
                let _data: any = res
                this.data = _data;
                this.dataStatus = true
            }
        )
    }


    getUsers() {
        return this.data.users
    }
    getNetwork() {
        return this.data.network
    }
    getTops() {
        return this.data.top10
    }
}