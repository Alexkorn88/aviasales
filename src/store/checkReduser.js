import { ALL_CHECK, ONE_CHECK } from './type';
/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
const defState = {
  checkItem: [
    {
      id: 0,
      title: 'Без пересадок',
      checked: false,
    },
    {
      id: 1,
      title: '1 пересадка',
      checked: false,
    },
    {
      id: 2,
      title: '2 пересадки',
      checked: false,
    },
    {
      id: 3,
      title: '3 пересадки',
      checked: false,
    },
  ],
};

export const checkReduser = (state = defState, action) => {
  switch (action.type) {
    case ALL_CHECK:
      return {
        ...state,
        checkItem: state.checkItem.map((item) => ({
          ...item,
          checked: action.payload,
        })),
      };
    case ONE_CHECK:
      const itemIndex = state.checkItem.findIndex(({ id }) => id === action.id);
      const item = state.checkItem[itemIndex];
      const newItem = {
        ...item,
        checked: !item.checked,
      };
      return {
        ...state,
        checkItem: [...state.checkItem.slice(0, itemIndex), newItem, ...state.checkItem.slice(itemIndex + 1)],
      };
    default:
      return state;
  }
};
