import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostSumary } from '../../models/postSumary';

@Component({
  selector: 'app-create-history',
  templateUrl: './create-history.component.html',
  styleUrls: ['./create-history.component.css'],
})
export class CreateHistoryComponent implements OnInit {
  pageForm: FormGroup;
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
