import React, { useState } from 'react';
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

  // This code can be put back later ('fakes' full screen by stretching the element to the full screen)
  // const [reRender, setReRender] = useState(0);
  //
  // const onPlay = () => {
  //   const videoElement = document.querySelector('iframe') as HTMLIFrameElement;
  //   const closeElement = document.querySelector(
  //     '#close-video-icon'
  //   ) as SVGElement;
  //   const bodyElement = document.querySelector('body') as HTMLBodyElement;
  //
  //   videoElement.style.position = 'absolute';
  //   videoElement.style.top = '0px';
  //   videoElement.style.left = '0px';
  //   videoElement.style.bottom = '0px';
  //   videoElement.style.right = '0px';
  //   videoElement.style.border = 'none';
  //   videoElement.style.margin = '0';
  //   videoElement.style.padding = '0';
  //   videoElement.style.overflow = 'hidden';
  //   videoElement.style.zIndex = '100';
  //   videoElement.style.overflow = 'hidden';
  //
  //   closeElement.style.display = 'inline';
  //
  //   bodyElement.style.overflow = 'hidden';
  //
  //   window.scrollTo({ top: 0 });
  // };
  //
  // const onExit = () => {
  //   const videoElement = document.querySelector('iframe') as HTMLIFrameElement;
  //   const closeElement = document.querySelector(
  //     '#close-video-icon'
  //   ) as SVGElement;
  //   const bodyElement = document.querySelector('body') as HTMLBodyElement;
  //
  //   videoElement.removeAttribute('style');
  //   closeElement.style.display = 'none';
  //   window.scrollTo(0, document.body.scrollHeight);
  //   bodyElement.style.overflow = 'auto';
  //
  //   // This is to force a rerender so on all devices the video stops playing
  //   setReRender(reRender + 1);
  // };

  return (
    <DraggableTile>
      <h2>UK Video Forecast</h2>
      <div className={styles.videoContainer}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoData.items[0].snippet.resourceId.videoId}`}
          controls={true}
          config={{ youtube: { playerVars: { playsinline: 0 } } }}
          // ^ forces fullscreen on iPhone devices only. Does not work on Android or Desktop
          // onPlay={onPlay}
          width="100%"
          height="100%"
        />
      </div>
      {/*<AiOutlineCloseCircle*/}
      {/*  id="close-video-icon"*/}
      {/*  onClick={onExit}*/}
      {/*  size={100}*/}
      {/*  className={styles.closeIcon}*/}
      {/*/>*/}
    </DraggableTile>
  );
};
