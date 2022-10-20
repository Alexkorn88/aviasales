// import { useSelector } from 'react-redux/es/exports';

// eslint-disable-next-line import/named
import { ALL_CHECK, ONE_CHECK, TOGGLE_FTR, SEARCH_ID, TICKETS_DATA, ADD_FIVE_TICKETS } from './type';

export const addAllCheckAction = (payload) => ({ type: ALL_CHECK, payload });
export const addOneCheckAction = (id) => ({ type: ONE_CHECK, id });
export const addFilterAction = (id) => ({ type: TOGGLE_FTR, id });
export const addFiveTicketAction = () => ({ type: ADD_FIVE_TICKETS });

export function addSearchIdAction() {
  return async (dispatch) => {
    fetch('https://front-test.dev.aviasales.ru/search')
      .then((res) => res.json())
      .then((res) => {
        const jsonId = res;
        dispatch({
          type: SEARCH_ID,
          data: jsonId,
        });
      })
      .catch((e) => console.log(e));
  };
}

export function addTicketsAction(searchId) {
  // const searchId = useSelector((state) => state.searchIds.searchId);
  const stop = false;
  return async (dispatch) => {
    if (typeof searchId === 'string' && !stop) {
      // eslint-disable-next-line no-inner-declarations
      async function searchTickets() {
        fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`)
          .then((res) => {
            if (res.status === 500) {
              searchTickets();
              throw Error('Упс, статус запроса 500, похоже на какую-то ошибку');
            } else {
              return res.json();
            }
          })
          .then((tikets) => {
            dispatch({ type: TICKETS_DATA, data: tikets.tickets });
            if (tikets.stop) {
              dispatch({
                type: TICKETS_DATA,
                data: tikets.tickets,
                stop: tikets.stop,
              });
            }
            searchTickets();
          })
          .catch((e) => {
            console.log(e, 'Ошибка');
          });
      }
      searchTickets();
    }
  };
}
