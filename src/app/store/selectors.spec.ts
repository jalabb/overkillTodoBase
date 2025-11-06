import { Todo } from '../models/todo';
import { State } from './reducer';
import { getTodoById, selectTodos } from './selectors';

describe('Selectors', () => {
  let closedTodo: Todo = { id: 1, title: 'todo1Title', isClosed: true };
  let openTodo: Todo = { id: 2, title: 'todo2Title', isClosed: false };
  let olderTodo: Todo = {
    id: 3,
    title: 'todo3Title',
    isClosed: false,
    dateModified: Date.parse('2025-01-01'),
  };
  let newerTodo: Todo = {
    id: 4,
    title: 'todo4Title',
    isClosed: false,
    dateModified: Date.parse('2025-02-01'),
  };
  let closedNewestTodo: Todo = {
    id: 5,
    title: 'todo5Title',
    isClosed: true,
    dateModified: Date.parse('2025-03-01'),
  };
  const initialState: State = {
    todos: [closedNewestTodo, closedTodo, newerTodo, openTodo, olderTodo],
  };

  it('should return the todos list with newer, open items first and closed items last', () => {
    const result = selectTodos.projector(initialState);
    expect(result).toEqual([
      newerTodo,
      olderTodo,
      openTodo,
      closedNewestTodo,
      closedTodo,
    ]);
  });

  it('should return todo with the right id', () => {
    const todo = getTodoById(2).projector(initialState);
    expect(todo).toEqual(openTodo);
  });
});
