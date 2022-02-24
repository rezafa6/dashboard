import { Component, OnInit } from '@angular/core';
import { ManageDataService } from 'src/app/services/manage-data-service';

@Component({
  selector: 'app-top-apps',
  templateUrl: './top-apps.component.html',
  styleUrls: ['./top-apps.component.scss']
})
export class TopAppsComponent implements OnInit {
  topApps: any = [];
  currentTab : number = 1;
  loading: boolean = true;
  constructor(
    private manageDataService: ManageDataService
  ) { }
  
  ngOnInit(): void {
    this.checkDataStatusAndSetData()
  }

  checkDataStatusAndSetData() {
    this.loading = true
    if (!this.manageDataService.dataStatus) {
      setTimeout(() => {
        this.checkDataStatusAndSetData()
      }, 200);
    } else {
      this.topApps = this.manageDataService.getTopApps()
      this.loading = false
    }
  }

}
