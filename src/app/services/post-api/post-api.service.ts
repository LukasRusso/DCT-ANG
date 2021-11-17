import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PostSumary } from 'src/app/site/models/postSumary';


@Injectable({
  providedIn: 'root'
})


export class PostApiService {

  url ="http://localhost:3000/posts";
  constructor(private http: HttpClient) {}


Posts(){
  return this.http.get<PostSumary[]>(this.url);
 }
}