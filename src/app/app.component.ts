import { Component, OnInit } from '@angular/core';
import { ManageDataService } from './services/manage-data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private manageDataService: ManageDataService) {}
lg = false
  ngOnInit(): void {
    this.manageDataService.getDataAndSetStatus()
  }
  title = 'dashboard';
  
}
