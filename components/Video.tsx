import React from 'react';
import { YoutubePlaylistApiResponse } from '../interfaces/youtube-api';
import styles from '../styles/Video.module.css';
import { DraggableTile } from './DraggableTile';
import dynamic from 'next/dynamic';

interface VideoProps {
  videoData: YoutubePlaylistApiResponse;
}

export const Video = ({ videoData }: VideoProps) => {
  const ReactPlayer = dynamic(() => import('react-player/lazy'), {
    ssr: false,
  });

  return (
    <DraggableTile>
      <h2>UK Video Forecast</h2>
      <div className={styles.videoContainer}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoData.items[0].snippet.resourceId.videoId}`}
          controls={true}
        />
      </div>
    </DraggableTile>
  );
};
