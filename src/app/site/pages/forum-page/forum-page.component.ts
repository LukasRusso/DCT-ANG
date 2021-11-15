import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostApiStoreService } from 'src/app/services/post-api/post-api-store.service';
import { PostSumary } from '../../models/postSumary';

@Component({
  selector: 'app-forum-page',
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.css'],
})
export class ForumPageComponent implements OnInit {
  constructor(private route: Router, private postService:PostApiStoreService) {}
  postList:PostSumary[] = []
  ngOnInit() {
    this.postService.listPosts()
    setTimeout(() => this.postList = this.postService.state,2000)
  }
}
