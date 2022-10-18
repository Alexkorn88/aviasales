import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import Header from '../header';
import Sidebar from '../sidebar';
import Filter from '../filter';
import TicketList from '../ticketList';
import Footer from '../footer';
import { addSearchIdAction, addTicketsAction } from '../../store/actions';

import styles from './app.module.scss';

function App() {
  const searchId = useSelector((state) => state.searchIds.searchId);
  const ticket = useSelector((state) => state.tickets.data);
  const stop = useSelector((state) => state.tickets.stop);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addSearchIdAction());
  }, []);

  useEffect(() => {
    dispatch(addTicketsAction(searchId));
  }, [searchId, stop]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.main}>
          <Filter />
          {!stop ? <div>STOP</div> : <TicketList ticketItems={ticket} />}
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App;
