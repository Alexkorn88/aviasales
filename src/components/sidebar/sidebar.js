import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import { addAllCheckAction, addOneCheckAction } from '../../store/actions';

import styles from './sidebar.module.scss';
import './sidebar.scss';

function CheckTRF() {
  const checkItem = useSelector((state) => state.check.checkItem);

  const dispatch = useDispatch();

  const checkedOne = (idx) => {
    dispatch(addOneCheckAction(idx));
  };

  return checkItem.map((item, idx) => (
    <label className="label" key={item.id}>
      <input
        type="checkbox"
        className="input visuality-hidden"
        checked={item.checked}
        onChange={() => checkedOne(idx)}
      />
      <span className="checker" />
      {item.title}
    </label>
  ));
}

function Sidebar() {
  const dispatch = useDispatch();

  const checkAll = useSelector((state) => state.check.checkItem).every(({ checked }) => checked);
  const checkedAll = (e) => {
    dispatch(addAllCheckAction(e.target.checked));
  };

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.title}>Количество пересадок</h3>
      <div className={styles.filter}>
        <form className={styles.form}>
          <label className="label">
            <input
              type="checkbox"
              className="input visuality-hidden"
              checked={checkAll}
              onChange={(e) => checkedAll(e)}
            />
            <span className="checker" />
            Все
          </label>
          <CheckTRF />
        </form>
      </div>
    </div>
  );
}
export default Sidebar;
