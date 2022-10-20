import React from 'react';
import { useDispatch } from 'react-redux/es/exports';

import { addFiveTicketAction } from '../../store/actions';

import styles from './footer.module.scss';

function Footer() {
  const dispatch = useDispatch();
  const hendleFiveTickets = () => {
    dispatch(addFiveTicketAction());
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={styles.footer} onClick={() => hendleFiveTickets()}>
      Показать еще 5 билетов!
    </div>
  );
}
export default Footer;
