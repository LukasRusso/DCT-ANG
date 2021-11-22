import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PostSumary } from 'src/app/site/models/postSumary';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/site/models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  url = environment.apiUrl + '/user';
  constructor(private http: HttpClient) {}

  createUser(user: Usuario): Observable<Usuario> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    return this.http.post<Usuario>(this.url, user, options);
  }
  
}
