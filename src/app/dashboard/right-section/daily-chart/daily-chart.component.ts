import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ManageDataService } from 'src/app/services/manage-data-service';

@Component({
  selector: 'app-daily-chart',
  templateUrl: './daily-chart.component.html',
  styleUrls: ['./daily-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DailyChartComponent implements OnInit {

  constructor(private manageDataService: ManageDataService) {}
  
  dailyReport: any = [];
  dates: any [] = [];
  values: any [] = [];
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options 

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
      this.dailyReport = this.manageDataService.getDailyReports();
      this.dates = this.dailyReport.dates
      this.values = this.dailyReport.values
      this.initChart()
    }
  }

  initChart() {
    this.chartOptions = {
      series: [{
        data: [...this.values],
        type: 'column',
        colorAxis: '#000000',
          pointPadding: 0,
          borderWidth: 0.5,
          groupPadding: 0,
          shadow: false,
      }],
      chart: {
        style: {
            fontFamily: 'IranSansX'
        }
    },
      credits: {
        enabled: false
      },
      colors: ['#ffd8c4'],
      title: {
        align: 'right',
        text: 'گزارش روزانه عملکرد',
        style: {
          "fontFamily" : 'IranSansX' , 'color' : '#263238'
        }
      },
      // legend: {
      //   align: 'center',
      //   verticalAlign: 'bottom',
      //   itemStyle : {
      //     "display": "none"
      //   }
      // },
      subtitle: {
        align: 'right',
        text: 'زیر عنوان',
        style: {
          "fontFamily" : 'IranSansX ' , 'color' : '#607D8B'
        }
      },
      xAxis:{
        gridLineWidth: 0,
        categories: [...this.dates],
        crosshair: true        
     },
     yAxis:{
      gridLineWidth: 0,
      title: {
        text: ''
      },
      crosshair: true        
   }
    };
  }

}
