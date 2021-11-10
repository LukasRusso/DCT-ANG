import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment-page',
  templateUrl: './assessment-page.component.html',
  styleUrls: ['./assessment-page.component.css'],
})
export class AssessmentPageComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {}
}
