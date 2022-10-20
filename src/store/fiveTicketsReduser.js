import { ADD_FIVE_TICKETS } from './type';

const defState = {
  value: 5,
};

// eslint-disable-next-line import/prefer-default-export, default-param-last
export const fiveTicketsReduser = (state = defState, action) => {
  switch (action.type) {
    case ADD_FIVE_TICKETS:
      return {
        ...state,
        value: state.value + 5,
      };
    default:
      return state;
  }
};
