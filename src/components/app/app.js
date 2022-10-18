/* eslint-disable no-inner-declarations */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux/es/exports';

import Header from '../header';
import Sidebar from '../sidebar';
import Filter from '../filter';
import TicketList from '../ticketList';
import Footer from '../footer';
// eslint-disable-next-line no-unused-vars
import { addSearchIdAction, addTicketsAction } from '../../store/actions';

import styles from './app.module.scss';

function App() {
  const searchId = useSelector((state) => state.searchIds.searchId);
  const ticket = useSelector((state) => state.tickets.data);
  const stop = useSelector((state) => state.tickets.stop);
  // const [ticket, setTicket] = useState([]);
  // const [stop, setStop] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addSearchIdAction());
  }, []);

  useEffect(() => {
    dispatch(addTicketsAction(searchId));
  }, [searchId, stop]);

  // useEffect(() => {
  //   if (typeof searchId === 'string' && !stop) {
  //     async function searchTickets() {
  //       fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`)
  //         .then((res) => {
  //           if (res.status === 500) {
  //             searchTickets();
  //             throw Error('Упс, статус запроса 500, похоже на какую-то ошибку');
  //           } else {
  //             return res.json();
  //           }
  //         })
  //         .then((tikets) => {
  //           if (tikets.stop) {
  //             setStop(true);
  //             setTicket(tikets.tickets);
  //           }
  //           searchTickets();
  //         })
  //         .catch((e) => {
  //           console.log(e, 'Ошибка');
  //         });
  //     }
  //     searchTickets();
  //   }
  // }, [searchId, ticket, stop]);

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
