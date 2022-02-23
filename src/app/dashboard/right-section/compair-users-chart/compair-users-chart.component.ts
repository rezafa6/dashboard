import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ManageDataService } from 'src/app/services/manage-data-service';

@Component({
  selector: 'app-compair-users-chart',
  templateUrl: './compair-users-chart.component.html',
  styleUrls: ['./compair-users-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompairUsersChartComponent implements OnInit {
  incomeCompair: any = [];
  premium: any[] = [];
  shared: any[] = [];
  dates: any[] = []
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options
  constructor(private manageDataService: ManageDataService) { }

  ngOnInit(): void {
    this.manageDataService.getDataAndSetStatus()
    this.checkDataStatusAndSetData()
  }

  checkDataStatusAndSetData() {
    if (!this.manageDataService.dataStatus) {
      setTimeout(() => {
        this.checkDataStatusAndSetData()
      }, 200);
    } else {
      this.incomeCompair = this.manageDataService.getIncomeCompair();
      console.warn(this.incomeCompair)
      this.premium = this.incomeCompair.premium;
      this.shared = this.incomeCompair.shared;
      this.dates = this.incomeCompair.dates;
      this.initChart()
    }
  }
  initChart() {
    this.chartOptions = {
      chart: {
        type: 'column',
        style: {
          fontFamily: 'IranSansX'
        }
      },
      title: {
        align: 'right',
        text: '  مقایسه سهم درامدی کاربران پرمیوم و اشتراکی',
        style: {
          "fontFamily": 'IranSansX', 'color': '#263238'
        }
      },

      subtitle: {
        align: 'right',
        useHTML: true,
        text: "<img src='../assets/icons/line-chart.png' width ='20px' class='mr-1' />" + ' ' + "زیر عنوان",
        style: {
          "fontFamily": 'IranSansX ', 'color': '#607D8B', 'fontSize': '12px'
        }
      },
      legend: {
        x: 250,
        y: 100,
        floating: true,
        borderWidth: 1,
        shadow: false
      },
      xAxis: {
        categories: [...this.dates], gridLineWidth: 0,
        title: {
          useHTML: true,
          text: "<span class='org-circle rounded-circle'></span>"
        }, crosshair: true
      },
      yAxis: {
        title: {
          text: ''
        }, crosshair: true, gridLineWidth: 0,

      },

      colors: ['#f77331', '#1a1a1a'],
      plotOptions: {
        column: {
          dataLabels: {
            enabled: false
          }
        },
        series: {
          stacking: 'normal'
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        data: [...this.premium],
        name: ' اشتراکی',
        type: 'column',
        pointWidth: 20,
        pointPadding: 0,
        borderWidth: 0.5,
        groupPadding: 0,
        shadow: false,
      },
      {
        data: [...this.shared],
        name: ' پریمیوم',
        type: 'column',
        label: {
          enabled: false
        },
        pointWidth: 20,
        pointPadding: 0,
        borderWidth: 0.5,
        groupPadding: 0,
        shadow: false,
      }
      ],
    };


  }
}
