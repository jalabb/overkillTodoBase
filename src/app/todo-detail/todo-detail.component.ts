import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
import { loadTodos } from '../store/actions';
import { getTodoById } from '../store/selectors';

@Component({
  standalone: true,
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
  imports: [MatCardModule, MatButtonModule, NgIf, AsyncPipe],
})
export class TodoDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  id!: number;
  todo$: Observable<Readonly<Todo | undefined>>;

  constructor(private store: Store) {
    this.route.queryParams.subscribe((params) => {
      this.id = params.id;
    });
    this.todo$ = this.store.select(getTodoById(this.id));
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }

  return(): void {
    this.router.navigate(['']);
  }
}
