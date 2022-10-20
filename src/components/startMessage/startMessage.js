import React from 'react';

import styles from './startMessage.module.scss';

function StartMessage() {
  return <div className={styles.startMessage}>Рейсов, подходящих под заданные фильтры, не найдено</div>;
}
export default StartMessage;
