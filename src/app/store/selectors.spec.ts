import { State } from './reducer';
import { selectTodos } from './selectors';

describe('Selectors', () => {
  const initialState: State = {
    todos: [
      { title: 'todo1Title', isClosed: true },
      { title: 'todo2Title', isClosed: false },
    ],
  };

  it('should return the todos list with closed items last', () => {
    const result = selectTodos.projector(initialState);
    expect(result).toEqual([initialState.todos[1], initialState.todos[0]]);
  });
});
