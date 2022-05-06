import dynamic from 'next/dynamic';
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';

import { YoutubePlaylistApiResponse } from '../interfaces/youtube-api';
import styles from '../styles/Video.module.css';
import { DraggableTile } from './DraggableTile';
import ReactPlayer from 'react-player';
import { ImCross } from 'react-icons/im';

/**
 * is false for iPad (or android, or desktop)
 */
const useIsIphone = () => {
  const [isPhone, setIsPhone] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setIsPhone(/iPhone/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    console.log('isPhone', isPhone);
  }, [isPhone]);

  return isPhone;
};

interface VideoProps {
  videoData: YoutubePlaylistApiResponse;
}

/**
 * Video player that auto-fullscreens when played.
 * On iPhone this is done with playsinline=0,
 * On other platforms we 'fake' fullscreen by resizing the video iframe to fill the screen
 */
export const Video = ({ videoData }: VideoProps) => {
  const ReactPlayer = dynamic(() => import('react-player/lazy'), {
    ssr: false,
  });

  const videoId = videoData?.items?.[0]?.snippet?.resourceId?.videoId;

  const isIphone = useIsIphone();

  const playerRef = useRef<ReactPlayer | null>(null);

  const [fakeFullscreen, setFakeFullscreen] = useState(false);

  /**
   * Used to make full-screen on play work on Android/Desktop
   */
  const handleOnPlay = useCallback(() => {
    if (isIphone) return;

    if (!playerRef.current) return;

    setFakeFullscreen(true);
  }, [isIphone]);

  /**
   * JIC we need access to the API later
   */
  const handleOnReady = useCallback(
    (p: ReactPlayer) => (playerRef.current = p),
    []
  );

  const config = useMemo(() => {
    return {
      youtube: {
        playerVars: {
          playsinline: isIphone ? 0 : 1, // iPhone-only: playsinline=0 opens video full-screen
          // Note; modestbranding: 1 is the default
        },
      },
    };
  }, [isIphone]);

  return (
    <DraggableTile>
      <h2>UK video forecast</h2>
      <div
        className={fakeFullscreen ? undefined : styles.videoContainer}
        style={
          fakeFullscreen
            ? {
                position: 'fixed',
                inset: 0,
                zIndex: 1001,
              }
            : undefined
        }
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          onReady={handleOnReady}
          config={config}
          controls={true}
          playing={isIphone ? undefined : fakeFullscreen}
          onPlay={handleOnPlay}
          width="100%"
          height="100%"
        />

        {fakeFullscreen && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: '0.9rem',
              right: 0,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button
              className={styles.fullscreenClose}
              onClick={() => {
                setFakeFullscreen(false);
                // TODO hack! scroll to bottom as user has lost their scroll position due to the layout changes
                requestAnimationFrame(() => {
                  window.scrollTo(0, document.body.scrollHeight);
                });
              }}
            >
              <ImCross style={{ marginTop: '-2px' }} />{' '}
              <div style={{ marginLeft: '0.4rem' }}>Close</div>
            </button>
          </div>
        )}
      </div>
    </DraggableTile>
  );
};
