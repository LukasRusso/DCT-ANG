import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryApiStoreService } from 'src/app/services/historyServices/history-api-store.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  constructor(private route: Router, private postService:HistoryApiStoreService) {}
  historyList:any = []
  ngOnInit() {
    this.postService.listHistorys()
    setTimeout(() => this.historyList = this.postService.state,2000)
  }
}
