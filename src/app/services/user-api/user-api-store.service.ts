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
}
