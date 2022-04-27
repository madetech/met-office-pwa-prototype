import React from 'react';
import { YoutubePlaylistApiResponse } from '../interfaces/youtube-api';
import styles from '../styles/Video.module.css';
import { DraggableTile } from './DraggableTile';

interface VideoProps {
  videoData: YoutubePlaylistApiResponse;
}

export const Video = ({ videoData }: VideoProps) => {
  return (
    <DraggableTile>
      <h2>UK Video Forecast</h2>
      <div className={styles.videoContainer}>
        <iframe
          src={`https://www.youtube.com/embed/${videoData.items[0].snippet.resourceId.videoId}`}
          allow="autoplay; encrypted-media; "
          allowFullScreen
          title="Tuesday afternoon forecast 26/04/2022"
        />
      </div>
    </DraggableTile>
  );
};
