import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo';
import { loadTodosSuccess, toggleTodo } from './actions';

export const featureKey = 'todosStore';

export interface State {
  todos: ReadonlyArray<Todo>;
}

export const initialState: State = {
  todos: [],
};

export const todosReducer = createReducer(
  initialState,
  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
  })),
  on(toggleTodo, (state, { changedTodo }) => {
    const todos = state.todos.slice();
    const index = todos.indexOf(changedTodo);
    if (index >= 0) {
      todos[index] = { ...changedTodo, isClosed: !changedTodo.isClosed };
    }
    return { ...state, todos: todos };
  })
);
