import { UPDATE_DATA } from './constants';
const initialState = {
  data: [
    {
      id: 1,
      name: '1',
      dateCreated: 'lll',
      category: 'vova',
      context: 'ebav',
      planDate: 'Olya',
      archive: true
    },
    {
      id: 2,
      name: '2',
      dateCreated: 'lll',
      category: 'vova',
      context: 'ebav',
      planDate: 'Olya',
      archive: false
    },
    {
      id: 3,
      name: '3',
      dateCreated: 'lll',
      category: 'Random',
      context: 'ebav',
      planDate: 'Olya',
      archive: false
    },
    {
      id: 4,
      name: '4',
      dateCreated: 'lll',
      category: 'vova',
      context: 'ebav',
      planDate: 'Olya',
      archive: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      console.log('Kolya', action.payload);
      return {
        data: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
