import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { History } from '../../models/history';
import { PostSumary } from '../../models/postSumary';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  pageForm: FormGroup;
  @Input() history: History;
  constructor(private fb: FormBuilder) {
    this.pageForm = this.fb.group({
      description: [''],
    });
  }
  ngOnInit(): void {}

  postHistory() {
    console.log(this.pageForm.value)
  }
}
