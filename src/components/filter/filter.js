import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import { addFilterAction } from '../../store/actions';

import './filter.scss';

function Filter() {
  const filterItem = useSelector((state) => state.filter.filterItem);
  const dispatch = useDispatch();
  const handleFilter = (idx) => {
    dispatch(addFilterAction(idx));
  };

  return (
    <div className="filter">
      {filterItem.map((item, idx) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div className={item.className} key={item.id} onClick={() => handleFilter(idx)}>
          {item.title}
        </div>
      ))}
    </div>
  );
}
export default Filter;
