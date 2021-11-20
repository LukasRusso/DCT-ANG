import { Injectable } from '@angular/core';
import { Store } from 'src/app/core/models/store-model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HistoryApiService } from './history-api.service';
import { History } from 'src/app/site/models/history';

@Injectable({
  providedIn: 'root',
})
export class HistoryApiStoreService extends Store<History[]> {
  posts = [];

  constructor(private api: HistoryApiService) {
    super([]);
  }

  historyQuery() {
    return this.api.getHistorys();
  }

  listHistorys() {
    this.setState([]);
    this.historyQuery().subscribe((data) => {
      for (let item of data) {
        let list = this.state;
        list.push(item);
        this.setState(list);
      }
    });
  }
  crateHistory(value: History){
    return this.api.postHistory(value); 
  }

}
