import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ManageDataService } from 'src/app/services/manage-data-service';

@Component({
  selector: 'app-user-subscription-chart',
  templateUrl: './user-subscription-chart.component.html',
  styleUrls: ['./user-subscription-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserSubscriptionChartComponent implements OnInit {

  constructor(private manageDataService: ManageDataService) { }

  saleReport: any = [];
  items: any[] = []
  values: any[] = [];
  Highcharts: typeof Highcharts = Highcharts; 
  chartOptions !: Highcharts.Options
  ngOnInit(): void {
    this.checkDataStatusAndSetData()
  }
  checkDataStatusAndSetData() {
    if (!this.manageDataService.dataStatus) {
      setTimeout(() => {
        this.checkDataStatusAndSetData()
      }, 200);
    } else {
      this.saleReport = this.manageDataService.getSaleReport();
      this.saleReport.data.forEach((itemx: any) => {
        this.items.push(itemx.item)
        this.values.push(itemx.value)
      });
      this.initChart()
    }
  }


  initChart() {
    this.chartOptions = {
      series: [
        {
        data: [...this.values],
        type: 'bar',
        colorAxis: '#000000',
      },
    
    ],
      chart: {
        style: {
          fontFamily: 'IranSansX',
        }
      },
      credits: {
        enabled: false
      },
      colors: ['#f77331', '#fa8039', '#fa8846'],
      
      title: {
        align: 'right',
        text: '  نمودار فروش اشتراک',
        style: {
          "fontFamily": 'IranSansX', 'color': '#263238'
        }
      },
      legend: {
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: {
          "display": "none",
        }
      },
      subtitle: {
        align: 'right',
        useHTML: true,
        text:  "<img src='../assets/icons/arr-sn.png' width ='20px' class='mr-1' />" + ' ' + "بالا به پایین " ,
        style: {
          "fontFamily": 'IranSansX ', 'color': '#607D8B' , 'fontSize' : '12px'
        }
      },
      plotOptions: {
        bar: {
          colorByPoint: true,
          dataLabels: {
            enabled: true,
            align: 'center',
            color: '#ffffff',
            inside: true,
          },
          pointWidth: 30,
          pointPadding: 100,
        },
        series: {
          stacking: 'normal',
        },
      },
      xAxis: {
        gridLineWidth: 0,
        visible: true,
        reversed: true,
        categories: [...this.items],
        title: {
          text: null,
        }
      },
      yAxis: {
        gridLineWidth: 0,
        visible: false,
        reversed: true,
      }
    };
  }
}
