import { loadTodosSuccess, toggleTodo } from './actions';
import * as fromReducer from './reducer';
import { State } from './reducer';

describe('Reducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.todosReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('loadTodosSuccess action', () => {
    it('should retrieve all todos and update the state', () => {
      const { initialState } = fromReducer;
      const newState: State = {
        todos: [{ id: 1, title: 'aTitle', isClosed: false }],
      };
      const action = loadTodosSuccess({
        todos: [...newState.todos],
      });

      const state = fromReducer.todosReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('toggleTodo action', () => {
    it('should toggle isClosed', () => {
      const { initialState } = fromReducer;
      const todo = { id: 1, title: 'aTitle', isClosed: false };
      const newState: State = { todos: [todo] };
      const loadAction = loadTodosSuccess({
        todos: [...newState.todos],
      });

      let state = fromReducer.todosReducer(initialState, loadAction);
      expect(state.todos).toEqual([{ id: 1, title: 'aTitle', isClosed: false }]);

      const toggleAction = toggleTodo({
        changedTodo: todo,
      });

      state = fromReducer.todosReducer(state, toggleAction);
      expect(state.todos).toEqual([{ id: 1, title: 'aTitle', isClosed: true }]);
    });
  });
});
