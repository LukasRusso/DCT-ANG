import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subcription-page.component.html',
  styleUrls: ['./subcription-page.component.css'],
})
export class SubscriptionPeageComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}
}
