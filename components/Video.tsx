import React from 'react';
import { YoutubePlaylistApiResponse } from '../interfaces/youtube-api';
import styles from '../styles/Video.module.css';
import { DraggableTile } from './DraggableTile';

interface VideoProps {
  videoData: YoutubePlaylistApiResponse;
}

export const Video = ({ videoData }: VideoProps) => {
  const videoId = videoData?.items?.[0]?.snippet?.resourceId?.videoId;
  const videoTitle = videoData?.items?.[0]?.snippet?.title;
  const videoSrc = `https://youtube.com/embed/${videoId}?playsinline=0&cc_load_policy=1&cc_lang_pref=en&modestbranding=1`;

  return (
    <DraggableTile>
      <h2>UK video forecast</h2>
      <div className={styles.videoContainer}>
        <iframe
          id="existing-iframe"
          title={videoTitle}
          height="100%"
          width="100%"
          src={videoSrc}
          frameBorder="0"
          sandbox="allow-scripts allow-same-origin"
          // ^ YouTube embed requires allow same origin to work
          allow="encrypted-media"
          allowFullScreen
          className={styles.videoIframe}
        />
      </div>
    </DraggableTile>
  );
};
