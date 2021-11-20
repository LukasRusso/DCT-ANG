import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HistoryApiStoreService } from 'src/app/services/historyServices/history-api-store.service';
import { History } from '../../models/history';
import { PostSumary } from '../../models/postSumary';

@Component({
  selector: 'app-create-history',
  templateUrl: './create-history.component.html',
  styleUrls: ['./create-history.component.css'],
})
export class CreateHistoryComponent implements OnInit {
  pageForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: HistoryApiStoreService,
    private route: Router
  ) {
    this.pageForm = this.fb.group({
      description: [''],
    });
  }
  ngOnInit(): void {}

  postHistory() {
    console.log(this.pageForm.value);
    const history = this.pageForm.value as History;
    this.store
      .crateHistory(history)
      .subscribe((data) => this.route.navigateByUrl('/'));
    this.route.navigateByUrl('/');
  }
}
