import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';
import {
  createTodo,
  createTodoFailed,
  createTodoSuccess,
  editTodo,
  editTodoFailed,
  editTodoSuccess,
  loadTodos,
  loadTodosFailed,
  loadTodosSuccess,
} from './actions';

@Injectable()
export class Effects {
  constructor(private actions$: Actions, private todoService: TodoService) {}
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      mergeMap(() =>
        this.todoService.list().pipe(
          map((todos) => loadTodosSuccess({ todos })),
          catchError(() => [loadTodosFailed()])
        )
      )
    )
  );

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTodo),
      switchMap((action) =>
        this.todoService.createTodo(action.todo).pipe(
          map((todo) => createTodoSuccess({ todo })),
          catchError(() => [createTodoFailed()])
        )
      )
    )
  );

  editTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editTodo),
      switchMap((action) =>
        this.todoService.editTodo(action.todo).pipe(
          map((todo) => editTodoSuccess({ todo })),
          catchError(() => [editTodoFailed()])
        )
      )
    )
  );
}
