export { TICKETS_DATA } from './type';

const defState = {
  data: [],
  stop: false,
};

// eslint-disable-next-line default-param-last
export const ticketsReduser = (state = defState, action) => {
  switch (action.type) {
    case 'TICKETS_DATA':
      return {
        ...state,
        data: [...state.data, ...action.data],
        stop: action.stop,
      };
    default:
      return state;
  }
};
