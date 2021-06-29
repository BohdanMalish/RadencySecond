import { UPDATE_DATA } from './constants';
const initialState = {
  data: [
    {
      id: 1,
      name: 'Take a new Task',
      dateCreated: '19.02.2021',
      category: 'Random',
      context: '..',
      planDate: '21.03.2021',
      archive: true
    },
    {
      id: 2,
      name: 'Take a new Task',
      dateCreated: '19.02.2021',
      category: 'Random',
      context: '..',
      planDate: '21.03.2021',
      archive: true
    },
    {
      id: 3,
      name: 'Take a new Task',
      dateCreated: '19.02.2021',
      category: 'Task',
      context: '..',
      planDate: '21.03.2021',
      archive: false
    },
    {
      id: 4,
      name: 'Take a new Task',
      dateCreated: '19.02.2021',
      category: 'Idea',
      context: '..',
      planDate: '21.03.2021',
      archive: false
    },
    {
      id: 5,
      name: 'Take a new Task',
      dateCreated: '19.02.2021',
      category: 'Idea',
      context: '..',
      planDate: '21.03.2021',
      archive: false
    },
    {
      id: 6,
      name: 'Take a new Task',
      dateCreated: '19.02.2021',
      category: 'Idea',
      context: '..',
      planDate: '21.03.2021',
      archive: false
    },
    {
      id: 7,
      name: 'Take a new Task',
      dateCreated: '19.02.2021',
      category: 'Idea',
      context: '..',
      planDate: '21.03.2021',
      archive: false
    },
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        data: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
