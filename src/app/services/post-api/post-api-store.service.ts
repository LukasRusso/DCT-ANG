import { Injectable } from '@angular/core';
import { Store } from 'src/app/core/models/store-model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { PostApiService } from './post-api.service';
import { PostSumary } from 'src/app/site/models/postSumary';

@Injectable({
  providedIn: 'root',
})
export class PostApiStoreService extends Store<PostSumary[]> {
  posts = [];

  constructor(private api: PostApiService) {
    super([]);
  }

  postQuery() {
    return this.api.Posts();
  }

  listPosts() {
    this.setState([]);
    this.postQuery().subscribe((data) => {
      for (let item of data) {
        let postList = this.state;
        postList.push(item);
        this.setState(postList);
      }
    });
  }

}
