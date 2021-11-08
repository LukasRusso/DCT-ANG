import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum-page',
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.css'],
})
export class ForumPageComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}
}
