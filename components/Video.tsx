import React from 'react';
import styles from '../styles/Video.module.css';
import { DraggableTile } from './DraggableTile';

export const Video = () => {
  return (
    <DraggableTile>
      <h2>UK Video Forecast</h2>
      <div className={styles.videoContainer}>
        <iframe
          src="https://www.youtube.com/embed/Ho7ZNiYP9MU"
          allow="autoplay; encrypted-media; "
          allowFullScreen
          title="Tuesday afternoon forecast 26/04/2022"
        />
      </div>
    </DraggableTile>
  );
};
