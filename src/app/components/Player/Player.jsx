import React, { useContext, useState, useRef } from 'react';
import styles from './player.module.scss';
import { StoreContext } from '../../utils/Store';

const Player = () => {
  const { currentTrack, stations, setCurrentTrack } = useContext(StoreContext);
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(true);
  const [playing, setPlaying] = useState(false);
  const audioPlayer = useRef();

  const toggleCurrentAudio = () => {
    if (!playing) {
      audioPlayer.current.play();
      setPlaying(true);
    } else {
      audioPlayer.current.pause();
      setPlaying(false);
    }
  };

  const nextStation = () => {
    const nextTrack = currentTrack + 1;

    if (currentTrack !== stations.length - 1) {
      setPlaying(false);
      setCurrentTrack(nextTrack);
    } else {
      setDisableNext(true);
    }

    setDisablePrev(false);
  };

  const prevStation = () => {
    const prevTrack = currentTrack - 1;

    if (currentTrack > 0) {
      setPlaying(false);
      setCurrentTrack(prevTrack);
    } else {
      setDisablePrev(true);
    }
    setDisableNext(false);
  };

  return (
    <section className={styles.player}>
      <audio ref={audioPlayer} src={stations[currentTrack].url}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <h2 className={styles.player__stationName}>{stations[currentTrack].title}</h2>
      <div className={styles.player__controls}>
        <button
          aria-pressed="false"
          className={`${styles.player__buttons} ${disablePrev ? styles.player__buttonsDisabled : null}`}
          onClick={prevStation}
          disabled={disablePrev}
        >
          Previous
        </button>
        <button aria-pressed="false" className={styles.player__buttons} onClick={toggleCurrentAudio}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <button
          aria-pressed="false"
          className={`${styles.player__buttons} ${disableNext ? styles.player__buttonsDisabled : null}`}
          onClick={nextStation}
          disabled={disableNext}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Player;
