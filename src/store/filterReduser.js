import { TOGGLE_FTR } from './type';
/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
const defState = {
  filterItem: [
    {
      id: 0,
      title: 'Самый дешевый',
      enable: false,
      className: 'filterBtn',
    },
    {
      id: 1,
      title: 'Самый быстрый',
      enable: false,
      className: 'filterBtn',
    },
    {
      id: 2,
      title: 'Оптимальный',
      enable: false,
      className: 'filterBtn',
    },
  ],
};

export const filterReduser = (state = defState, action) => {
  switch (action.type) {
    case TOGGLE_FTR:
      const itemIndex = state.filterItem.findIndex(({ id }) => id === action.id);
      const item = state.filterItem[itemIndex];
      const newItem = {
        ...item,
        enable: !item.enable,
        className: !item.enable ? (item.className = 'filterBtnActive') : (item.className = 'filterBtn'),
      };
      return {
        ...state,
        // eslint-disable-next-line no-undef
        filterItem: state.filterItem.map((i) =>
          i.id === itemIndex ? newItem : { ...i, enable: false, className: 'filterBtn' }
        ),
      };
    default:
      return state;
  }
};
