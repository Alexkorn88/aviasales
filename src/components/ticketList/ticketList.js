// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux/es/exports';

// eslint-disable-next-line import/no-named-as-default
import TicketCard from '../ticketCard/ticketCard';

import styles from './ticketList.module.scss';

function TicketList() {
  const ticketItems = useSelector((state) => state.tickets.data);
  const filterItems = useSelector((state) => state.filter.filterItem);
  const addFiveTickets = useSelector((state) => state.fiveTickets.value);

  const filterFunc = (ticketArr) => {
    const ticArr = [...ticketArr];
    if (filterItems[0].enable) {
      return ticArr.sort((a, b) => a.price - b.price);
    }
    if (filterItems[1].enable) {
      return ticArr.sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      );
    }
    if (filterItems[2].enable) {
      return ticArr.sort(
        (a, b) =>
          a.price +
          a.segments[0].duration +
          a.segments[1].duration -
          (b.price + b.segments[0].duration + b.segments[1].duration)
      );
    }
    return ticArr;
  };
  const checkItem = useSelector((state) => state.check.checkItem);

  const checkFilter = (arr) => {
    if (checkItem[0].checked && !checkItem[1].checked && !checkItem[2].checked && !checkItem[3].checked) {
      return arr.filter((item) => item.segments.find((el) => el.stops.length === 0));
    }
    if (!checkItem[0].checked && checkItem[1].checked && !checkItem[2].checked && !checkItem[3].checked) {
      return arr.filter((item) => item.segments.find((el) => el.stops.length === 1));
    }
    if (!checkItem[0].checked && !checkItem[1].checked && checkItem[2].checked && !checkItem[3].checked) {
      return arr.filter((item) => item.segments.find((el) => el.stops.length === 2));
    }
    if (!checkItem[0].checked && !checkItem[1].checked && !checkItem[2].checked && checkItem[3].checked) {
      return arr.filter((item) => item.segments.find((el) => el.stops.length === 3));
    }
    if (checkItem[0].checked && checkItem[1].checked && !checkItem[2].checked && !checkItem[3].checked) {
      return arr.filter((item) => item.segments.find((el) => el.stops.length === 0 || el.stops.length === 1));
    }
    if (!checkItem[0].checked && checkItem[1].checked && checkItem[2].checked && !checkItem[3].checked) {
      return arr.filter((item) => item.segments.find((el) => el.stops.length === 1 || el.stops.length === 2));
    }
    if (!checkItem[0].checked && !checkItem[1].checked && checkItem[2].checked && checkItem[3].checked) {
      return arr.filter((item) => item.segments.find((el) => el.stops.length === 2 || el.stops.length === 3));
    }
    if (checkItem[0].checked && !checkItem[1].checked && checkItem[2].checked && !checkItem[3].checked) {
      return arr.filter((item) => item.segments.find((el) => el.stops.length === 0 || el.stops.length === 2));
    }
    if (checkItem[0].checked && !checkItem[1].checked && !checkItem[2].checked && checkItem[3].checked) {
      return arr.filter((item) => item.segments.find((el) => el.stops.length === 0 || el.stops.length === 3));
    }
    if (!checkItem[0].checked && checkItem[1].checked && !checkItem[2].checked && checkItem[3].checked) {
      return arr.filter((item) => item.segments.find((el) => el.stops.length === 1 || el.stops.length === 3));
    }

    if (checkItem[0].checked && checkItem[1].checked && checkItem[2].checked && !checkItem[3].checked) {
      return arr.filter((item) =>
        item.segments.find((el) => el.stops.length === 0 || el.stops.length === 1 || el.stops.length === 2)
      );
    }
    if (!checkItem[0].checked && checkItem[1].checked && checkItem[2].checked && checkItem[3].checked) {
      return arr.filter((item) =>
        item.segments.find((el) => el.stops.length === 1 || el.stops.length === 2 || el.stops.length === 3)
      );
    }
    if (checkItem[0].checked && !checkItem[1].checked && checkItem[2].checked && checkItem[3].checked) {
      return arr.filter((item) =>
        item.segments.find((el) => el.stops.length === 0 || el.stops.length === 2 || el.stops.length === 3)
      );
    }
    if (checkItem[0].checked && checkItem[1].checked && !checkItem[2].checked && checkItem[3].checked) {
      return arr.filter((item) =>
        item.segments.find((el) => el.stops.length === 0 || el.stops.length === 1 || el.stops.length === 3)
      );
    }
    return arr;
  };

  const userVisblTickets = checkFilter(filterFunc(ticketItems)).slice(0, addFiveTickets);
  const elements = userVisblTickets.map((item, index) => {
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
