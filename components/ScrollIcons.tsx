import styles from '../styles/WeatherTiles.module.css';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React from 'react';

interface ScrollIconsProps {
  scrollLeft: (event: React.MouseEvent<HTMLButtonElement>) => void;
  scrollRight: (event: React.MouseEvent<HTMLButtonElement>) => void;
  leftIconClass: string;
  rightIconClass: string;
}

export const ScrollIcons = ({
  scrollLeft,
  scrollRight,
  leftIconClass,
  rightIconClass,
}: ScrollIconsProps) => {
  return (
    <div className={styles.underForecastContainer}>
      <Link href="#">{<p className={styles.link}>View full forecast</p>}</Link>

      <div className={styles.scrollIconContainer}>
        <button onClick={scrollLeft} className={leftIconClass}>
          <FaChevronLeft className={styles.iconLeft} />
          Earlier
        </button>

        <button onClick={scrollRight} className={rightIconClass}>
          Later
          <FaChevronRight className={styles.iconRight} />
        </button>
      </div>
    </div>
  );
};
