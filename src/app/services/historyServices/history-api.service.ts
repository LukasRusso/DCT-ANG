import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PostSumary } from 'src/app/site/models/postSumary';
import { History } from 'src/app/site/models/history';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HistoryApiService {
  url = environment.apiUrl+ '/userHistory';
  constructor(private http: HttpClient) {}

  getHistorys() {
    return this.http.get<History[]>(this.url);
  }
  postHistory(value: History) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'responseType': 'text',
    });
    let options = { headers: httpHeaders };
    return this.http.post<any>(this.url, value, options);
  }
}
