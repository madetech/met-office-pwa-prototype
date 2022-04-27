import React, { useEffect, useState } from 'react';
import { YoutubePlaylistApiResponse } from '../interfaces/youtube-api';
import styles from '../styles/Video.module.css';
import { DraggableTile } from './DraggableTile';
import ReactPlayer from 'react-player/youtube';

interface VideoProps {
  videoData: YoutubePlaylistApiResponse;
}

export const Video = ({ videoData }: VideoProps) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <DraggableTile>
      <h2>UK Video Forecast</h2>
      <div className={styles.videoContainer}>
        {hasWindow && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoData.items[0].snippet.resourceId.videoId}`}
          />
        )}
      </div>
    </DraggableTile>
  );
};
