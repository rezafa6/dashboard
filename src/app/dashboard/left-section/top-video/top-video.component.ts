import { Component, OnInit } from '@angular/core';
import { ManageDataService } from 'src/app/services/manage-data-service';
@Component({
  selector: 'app-top-video',
  templateUrl: './top-video.component.html',
  styleUrls: ['./top-video.component.scss']
})
export class TopVideoComponent implements OnInit {
  topVideos: any = [];
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
      this.topVideos = this.manageDataService.getTopVideos();
      this.loading = false
    }
  }

}
