import React, { useContext } from 'react';
import styles from './figure.module.scss';
import { StoreContext } from '../../utils/Store';

const Figure = () => {
  const { currentTrack, stations } = useContext(StoreContext);

  return (
    <figure className={styles.figure}>
      <img src={stations[currentTrack].image.src} alt={stations[currentTrack].image.alt}></img>
    </figure>
  );
};

export default Figure;
