import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey, State } from './reducer';

export const getState = createFeatureSelector<State>(featureKey);

export const selectTodos = createSelector(getState, (state: State) =>
  [...state.todos].sort((a, b) => {
    return a.isClosed === b.isClosed ? 0 : a.isClosed ? 1 : -1;
  })
);

export const getTodoById = (id: number) =>
  createSelector(getState, (state: State) => {
    return state.todos.find((todo) => todo.id == id);
  });
