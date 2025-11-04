import { Todo } from '../models/todo';
import { State } from './reducer';
import { getTodoById, selectTodos } from './selectors';

describe('Selectors', () => {
  let closedTodo: Todo = { id: 1, title: 'todo1Title', isClosed: true };
  let openTodo: Todo = { id: 2, title: 'todo2Title', isClosed: false };
  const initialState: State = {
    todos: [closedTodo, openTodo],
  };

  it('should return the todos list with closed items last', () => {
    const result = selectTodos.projector(initialState);
    expect(result).toEqual([openTodo, closedTodo]);
  });

  it('should return todo with the right id', () => {
    const todo = getTodoById(2).projector(initialState);
    expect(todo).toEqual(openTodo);
  });
});
