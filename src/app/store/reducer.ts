import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo';
import { createTodoSuccess, loadTodosSuccess, toggleTodo } from './actions';

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
  on(createTodoSuccess, (state, { todo }) => ({
    ...state,
    todos: [todo, ...state.todos],
  })),
  on(toggleTodo, (state, { todo }) => {
    const todos = state.todos.slice();
    const index = todos.indexOf(
      todos.find((t) => t.id == todo.id) ?? ({} as Todo)
    );
    if (index >= 0) {
      todos[index] = todo;
    }
    return { ...state, todos: todos };
  })
);
