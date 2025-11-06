import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreateTodoModalComponent } from '../create-todo-modal/create-todo-modal.component';
import { Todo } from '../models/todo';
import { createTodo, editTodo, loadTodos, toggleTodo } from '../store/actions';
import { selectTodos } from '../store/selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<ReadonlyArray<Todo>>;

  constructor(private store: Store, public dialog: MatDialog) {
    this.todos$ = this.store.select(selectTodos);
  }

  ngOnInit(): void {
    this.store.select(selectTodos).subscribe((todos) => {
      if (todos.length == 0) {
        this.store.dispatch(loadTodos());
      }
    });
  }

  toggleTodo(todo: Todo) {
    todo = { ...todo, isClosed: !todo.isClosed };
    this.store.dispatch(editTodo({ todo }));
  }

  openNewTodo() {
    let dialogRef = this.dialog.open(CreateTodoModalComponent, {
      height: '400px',
      width: '300px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((todo) => {
      if (todo != undefined) {
        this.store.dispatch(createTodo({ todo }));
      }
    });
  }
}
