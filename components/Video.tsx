import React from 'react';
import styles from '../styles/Video.module.css';
export const Video = () => {
  return (
    <section className="tile">
      <h2>UK Video Forecast</h2>
      <div className={styles.videoContainer}>
        <iframe
          src="https://www.youtube.com/embed/Ho7ZNiYP9MU"
          allow="autoplay; encrypted-media; "
          allowFullScreen
          title="Tuesday afternoon forecast 26/04/2022"
        />
      </div>
    </section>
  );
};
