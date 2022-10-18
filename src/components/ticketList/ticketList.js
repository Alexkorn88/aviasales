// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux/es/exports';

// import { addSearchIdAction } from '../../store/actions';
// eslint-disable-next-line import/no-named-as-default
import TicketCard from '../ticketCard/ticketCard';

import styles from './ticketList.module.scss';

function TicketList({ ticketItems }) {
  const elements = ticketItems.map((item, index) => {
    const { ...itemProps } = item;
    const indexItem = index;
    return (
      <div key={indexItem} className={styles.ticketList}>
        <TicketCard itemProps={itemProps} ticketItems={ticketItems} />
      </div>
    );
  });
  return elements;
}
export default TicketList;
