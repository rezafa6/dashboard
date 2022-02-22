import { Component, OnInit } from '@angular/core';
import { ManageDataService } from 'src/app/services/manage-data-service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-first-row-boxes',
  templateUrl: './first-row-boxes.component.html',
  styleUrls: ['./first-row-boxes.component.scss']
})
export class FirstRowBoxesComponent implements OnInit {
  usersData: any = [];
  networkData: any = [];
  iconPath = environment.iconPath;
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
      this.usersData = this.manageDataService.getUsers();
      this.networkData = this.manageDataService.getNetwork()
    }
  }

  toNum(s: any) {
     console.log(typeof s)
  }

  

}
