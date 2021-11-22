import { Injectable } from '@angular/core';
import { Store } from 'src/app/core/models/store-model';
import { Usuario } from 'src/app/site/models/usuario';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root',
})
export class UserApiStoreService extends Store<Usuario> {
  constructor(private api: UserApiService) {
    super(null as any);
  }
  createUser(userForm: Usuario) {
    return this.api.createUser(userForm);
  }
  setUser(response: any) {
    localStorage.setItem('userId', response.userId);
    localStorage.setItem('token', response.token);
    localStorage.setItem('isLoged', 'true');
  }

  getIsLoged() {
    return localStorage.getItem('isLoged');
  }
}
