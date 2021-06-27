import CONSTANTS from './constants';

export const closeCreator = () => ({
  type: CONSTANTS.CLOSE_CREATOR
});

export const openCreator = () => ({
  type: CONSTANTS.OPEN_CREATOR
});

export const closeEditor = () => ({
  type: CONSTANTS.CLOSE_EDITOR
});

export const openEditor = (id) => ({
  type: CONSTANTS.OPEN_EDITOR,
  payload: id
});
