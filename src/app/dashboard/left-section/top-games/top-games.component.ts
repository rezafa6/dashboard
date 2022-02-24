import { Component, OnInit } from '@angular/core';
import { ManageDataService } from 'src/app/services/manage-data-service';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.scss']
})
export class TopGamesComponent implements OnInit {

  topGames: any = [];
  currentTab : number = 1;
  loading: boolean = true;
  constructor(
    private manageDataService: ManageDataService
  ) { }
  ngOnInit(): void {
    this.checkDataStatusAndSetData()
  }

  checkDataStatusAndSetData() {
    this.loading = false
    if (!this.manageDataService.dataStatus) {
      setTimeout(() => {
        this.checkDataStatusAndSetData()
      }, 200);
    } else {
      this.topGames = this.manageDataService.getTopGames()
      this.loading = false
    }
  }

}
