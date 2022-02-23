import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MainDataHttpService } from './http-service';

@Injectable({ providedIn: 'root' })

export class ManageDataService {

    constructor(
        private mainDataHttpService: MainDataHttpService) { }

    env = environment;
    data: any;
    dataStatus: boolean = false;
    getDataAndSetStatus() {
        this.mainDataHttpService.getData().then(
            res => {
                console.log(res)
                let _data: any = res
                this.data = _data;
                this.dataStatus = true;
            },
            err => { console.log(err) }
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
    getKeywords() {
        return this.data.keywords
    }
    getTimeConsume() {
        return this.data.time_consume
    }
    getDailyReports() {
        return this.data.daily_report
    }
    getSaleReport() {
        return this.data.sale_report
    }
    getIncomeCompair() {
        return this.data.income_compare_report
    }
}