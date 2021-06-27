import { createSelector } from 'reselect';

const listSelector = createSelector(
  (state) => state.todos,
  (todos) => todos
);

export default listSelector;
