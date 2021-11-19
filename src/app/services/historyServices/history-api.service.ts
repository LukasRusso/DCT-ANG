import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PostSumary } from 'src/app/site/models/postSumary';


@Injectable({
  providedIn: 'root'
})


export class HistoryApiService {

  url ="https://officialbasetech.azurewebsites.net/api/userHistory";
  constructor(private http: HttpClient) {}


getHistorys(){
  return this.http.get<PostSumary[]>(this.url);
 }
}
