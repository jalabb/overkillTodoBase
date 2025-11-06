import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

export const loadTodos = createAction('[Todos] Load todos');

export const loadTodosSuccess = createAction(
  '[Todos] Load todos success',
  props<{ todos: Todo[] }>()
);

export const loadTodosFailed = createAction('[Todos] Load todos failed');

export const toggleTodo = createAction(
  '[Todos] toggle todo',
  props<{ todo: Todo }>()
);

export const createTodo = createAction(
  '[Todos] save todo',
  props<{ todo: Todo }>()
);

export const createTodoSuccess = createAction(
  '[Todos] save todo success',
  props<{ todo: Todo }>()
);

export const createTodoFailed = createAction('[Todos] save todo failed');

export const editTodo = createAction(
  '[Todos] edit todo',
  props<{ todo: Todo }>()
);

export const editTodoSuccess = createAction(
  '[Todos] edit todo success',
  props<{ todo: Todo }>()
);

export const editTodoFailed = createAction('[Todos] edit todo failed');
