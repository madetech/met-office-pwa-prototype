import React from 'react';
import { YoutubePlaylistApiResponse } from '../interfaces/youtube-api';
import styles from '../styles/Video.module.css';
import { DraggableTile } from './DraggableTile';
import dynamic from 'next/dynamic';
import { AiOutlineCloseCircle } from 'react-icons/ai';
interface VideoProps {
  videoData: YoutubePlaylistApiResponse;
}

export const Video = ({ videoData }: VideoProps) => {
  const ReactPlayer = dynamic(() => import('react-player/lazy'), {
    ssr: false,
  });

  const onPlay = () => {
    const videoElement = document.querySelector('iframe') as HTMLIFrameElement;
    const closeButtonElement = document.querySelector(
      '#close-video-icon'
    ) as SVGElement;

    videoElement.style.position = 'absolute';
    videoElement.style.top = '0px';
    videoElement.style.left = '0px';
    videoElement.style.bottom = '0px';
    videoElement.style.right = '0px';
    videoElement.style.border = 'none';
    videoElement.style.margin = '0';
    videoElement.style.padding = '0';
    videoElement.style.overflow = 'hidden';
    videoElement.style.zIndex = '100';

    closeButtonElement.style.display = 'inline';
  };

  const onPause = () => {
    const videoElement = document.querySelector('iframe') as HTMLIFrameElement;
    const closeButtonElement = document.querySelector(
      '#close-video-icon'
    ) as SVGElement;

    videoElement.removeAttribute('style');
    closeButtonElement.style.display = 'none';
  };

  return (
    <DraggableTile>
      <h2>UK Video Forecast</h2>
      <div className={styles.videoContainer}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoData.items[0].snippet.resourceId.videoId}`}
          controls={true}
          onPlay={onPlay}
          onPause={onPause}
          width="100%"
          height="100%"
        />
      </div>
      <AiOutlineCloseCircle
        id="close-video-icon"
        style={{
          position: 'absolute',
          top: '25px',
          right: '25px',
          zIndex: '99999999',
          color: 'white',
          display: 'none',
        }}
        onClick={onPause}
        size={100}
      />
    </DraggableTile>
  );
};
