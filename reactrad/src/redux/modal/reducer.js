import CONSTANTS from './constants';

const initialState = {
  creator: {
    isOpen: false
  },
  editor: {
    isOpen: false,
    noteId: 0
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.CLOSE_CREATOR:
      return {
        ...state,
        creator: { isOpen: false }
      };
    case CONSTANTS.OPEN_CREATOR:
      return {
        ...state,
        creator: { isOpen: true }
      };
    case CONSTANTS.CLOSE_EDITOR:
      return {
        ...state,
        editor: { noteId: null, isOpen: false }
      };
    case CONSTANTS.OPEN_EDITOR:
      return {
        ...state,
        editor: { noteId: action.payload, isOpen: true }
      };
    default:
      return initialState;
  }
};

export default reducer;
