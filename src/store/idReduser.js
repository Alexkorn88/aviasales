import { SEARCH_ID } from './type';

const defState = {};

// eslint-disable-next-line import/prefer-default-export, default-param-last
export const searchIdReduser = (state = defState, action) => {
  switch (action.type) {
    case SEARCH_ID:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};
