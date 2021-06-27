import { createSelector, createStructuredSelector } from 'reselect';

export const modalCreatorSelector = createSelector(
  (state) => state.modal,
  ({ creator }) => creator.isOpen
);

const isOpenEditorSelector = createSelector(
  (state) => state.modal,
  ({ editor }) => editor.isOpen
);

const noteIdEditorSelector = createSelector(
  (state) => state.modal,
  ({ editor }) => editor.noteId
);

export const modalEditorSelector = createStructuredSelector({
  isOpen: isOpenEditorSelector,
  noteId: noteIdEditorSelector
});
