import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-create-todo-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
  ],
  templateUrl: './create-todo-modal.component.html',
  styleUrls: ['./create-todo-modal.component.scss'],
})
export class CreateTodoModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateTodoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo
  ) {}

  ngOnInit(): void {
    this.data.isClosed = false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  isDisabled() {
    return this.data.title == null || this.data.title.trim() == '';
  }
}
