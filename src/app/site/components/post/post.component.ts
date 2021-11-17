import { Component, Input, OnInit } from '@angular/core';
import { PostSumary } from '../../models/postSumary';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor() {}
  @Input() post: PostSumary;
  ngOnInit(): void {}
}
