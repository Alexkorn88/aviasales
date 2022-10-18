import React from 'react';

import styles from './ticketCard.module.scss';

function TicketCard({ itemProps }) {
  const { price, carrier, segments } = itemProps;

  const getPadNum = (num) => num.toString().padStart(3, '0');
  const ticktPrice = `${Math.floor(price / 1000)} ${getPadNum(price - Math.floor(price / 1000) * 1000)} Р`;

  const ticketData = segments.map((item) => {
    const { origin, destination, date, stops, duration } = item;
    // eslint-disable-next-line consistent-return
    function stopsTitle() {
      if (stops.length === 0) {
        return 'Без пересадок';
      }
      if (stops.length === 1) {
        return '1 пересадка';
      }
      if (stops.length > 1) {
        return `${stops.length} пересадки`;
      }
    }
    const getPadTime = (num) => num.toString().padStart(2, '0');
    const hours = getPadTime(Math.floor(duration / 60));
    const minutes = getPadTime(duration - hours * 60 >= 0 ? getPadTime(duration - hours * 60) : 59);

    const timeToAir = `${getPadTime(new Date(date).getHours())}:${getPadTime(new Date(date).getMinutes())}`;
    const timeFromAir = `${getPadTime(
      new Date(new Date(date).setHours(new Date(date).getHours() + Math.floor(duration / 60))).getHours()
    )}:${getPadTime(new Date(new Date(date).setMinutes(new Date(date).getMinutes() + duration)).getMinutes())}`;

    return (
      <div key={Math.random() * 10} className={styles.ticketData}>
        <div className={styles.ticketItem}>
          <p className={styles.ticketItemTopic}>{`${origin} - ${destination}`}</p>
          <p className={styles.ticketItemInfo}>{`${timeToAir} - ${timeFromAir}`}</p>
        </div>
        <div className={styles.ticketItem}>
          <p className={styles.ticketItemTopic}>В пути</p>
          <p className={`${styles.ticketItemInfo} ${styles.lowerCase}`}>{`${hours}ч ${minutes}м`}</p>
        </div>
        <div className={styles.ticketItem}>
          <p className={styles.ticketItemTopic}>{stopsTitle()}</p>
          <p className={styles.ticketItemInfo}>{stops.join(', ')}</p>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.ticketCard}>
      <div className={styles.ticketHeader}>
        <div className={styles.ticketPrice}>{ticktPrice}</div>
        <div className={styles.ticketLogo}>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="airlogo" />
        </div>
      </div>
      <div className={styles.ticketDataWrapper}>{ticketData}</div>
    </div>
  );
}
export default TicketCard;
