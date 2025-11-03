import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey, State } from './reducer';

export const getState = createFeatureSelector<State>(featureKey);

export const selectTodos = createSelector(getState, (state: State) =>
  [...state.todos].sort((a, b) => {
    return a.isClosed === b.isClosed ? 0 : a.isClosed ? 1 : -1;
  })
);
