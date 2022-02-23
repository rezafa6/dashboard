import { Component, OnInit } from '@angular/core';
import { ManageDataService } from 'src/app/services/manage-data-service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-second-row-boxes',
  templateUrl: './second-row-boxes.component.html',
  styleUrls: ['./second-row-boxes.component.scss']
})
export class SecondRowBoxesComponent implements OnInit {
  keywords : any = [];
  timeConsume : any = [];
  iconPath = environment.iconPath
  constructor(
    private manageDataService: ManageDataService
  ) { }

  ngOnInit(): void {
    this.checkDataStatusAndSetData()
  }

  checkDataStatusAndSetData() {
    if (!this.manageDataService.dataStatus) {
      setTimeout(() => {
        this.checkDataStatusAndSetData()
      }, 200);
    } else {
       this.keywords = this.manageDataService.getKeywords();
       this.timeConsume = this.manageDataService.getTimeConsume()
    }
  }

}
