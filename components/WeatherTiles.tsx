import React, { useRef, useState, useEffect } from 'react';
import { DailyForecast } from '../interfaces/api-data-daily';
import { Forecast } from '../interfaces/api-data-hourly';
import timeslotStyles from '../styles/Forecast.module.css';
import styles from '../styles/WeatherTiles.module.css';
import { Dayslot } from './Dayslot';
import { Timeslot } from './Timeslot';
import { ScrollIcons } from './ScrollIcons';
import { Timestamp } from './Timestamp';

const checkToDisableIcons = (
  element: HTMLElement,
  left: boolean,
  distance: number
) => {
  const totalWidth = element.scrollWidth;
  const viewableWidth = element.clientWidth;
  const xPositionLeft = element.scrollLeft;

  if (left) {
    const newXPosition = xPositionLeft - distance;
    return {
      leftDisabled: Math.max(0, newXPosition) === 0,
      rightDisabled:
        Math.min(totalWidth, newXPosition + viewableWidth) === totalWidth,
    };
  } else {
    const newXPosition = xPositionLeft + distance;
    return {
      leftDisabled: Math.max(0, newXPosition) === 0,
      rightDisabled:
        Math.min(totalWidth, newXPosition + viewableWidth) === totalWidth,
    };
  }
};

const sideScroll = (element: HTMLElement, left: boolean) => {
  const totalWidth = element.scrollWidth;
  const viewableWidth = element.clientWidth;
  const xPositionLeft = element.scrollLeft;
  const distance = viewableWidth * 0.66;

  if (left) {
    element.scrollTo({
      behavior: 'smooth',
      left: Math.max(0, xPositionLeft - distance),
    });
  } else {
    element.scrollTo({
      behavior: 'smooth',
      left: Math.min(totalWidth, xPositionLeft + distance),
    });
  }
  return checkToDisableIcons(element, left, distance);
};

interface WeatherTilesProps {
  isHourlyData: boolean;
  forecasts: Forecast[];
  dailyForecasts: DailyForecast[];
  lastUpdatedTime: string;
  fetchingData: boolean;
  weatherTileSectionRef: React.RefObject<HTMLElement>;
}

export const WeatherTiles = ({
  isHourlyData,
  forecasts,
  dailyForecasts,
  lastUpdatedTime,
  fetchingData,
  weatherTileSectionRef,
}: WeatherTilesProps) => {
  const [leftDisabled, setLeftDisabled] = useState(false);
  const [rightDisabled, setRightDisabled] = useState(false);

  useEffect(() => {
    if (weatherTileSectionRef.current) {
      const disabledOnLoad = checkToDisableIcons(
        weatherTileSectionRef.current,
        true,
        0
      );
      setLeftDisabled(disabledOnLoad.leftDisabled);
      setRightDisabled(disabledOnLoad.rightDisabled);
    }
  }, [isHourlyData, weatherTileSectionRef]);

  const scrollLeft = () => {
    if (weatherTileSectionRef.current) {
      const { leftDisabled: left, rightDisabled: right } = sideScroll(
        weatherTileSectionRef.current,
        true
      );
      setLeftDisabled(left);
      setRightDisabled(right);
    }
  };

  const scrollRight = () => {
    if (weatherTileSectionRef.current) {
      const { leftDisabled: left, rightDisabled: right } = sideScroll(
        weatherTileSectionRef.current,
        false
      );

      setLeftDisabled(left);
      setRightDisabled(right);
    }
  };

  const leftIconClass = leftDisabled ? styles.iconDisabled : styles.iconActive;

  const rightIconClass = rightDisabled
    ? styles.iconDisabled
    : styles.iconActive;

  return (
    <>
      <section className={timeslotStyles.timeslots} ref={weatherTileSectionRef}>
        {isHourlyData
          ? forecasts.map((forecast) => {
              return <Timeslot forecast={forecast} key={forecast.time} />;
            })
          : dailyForecasts.map((forecast) => {
              return <Dayslot forecast={forecast} key={forecast.time} />;
            })}
      </section>
      <Timestamp
        lastUpdatedTime={lastUpdatedTime}
        fetchingData={fetchingData}
      />
      <ScrollIcons
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
        leftIconClass={leftIconClass}
        rightIconClass={rightIconClass}
      />
    </>
  );
};
