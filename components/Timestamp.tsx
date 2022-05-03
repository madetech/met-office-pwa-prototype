import styles from '../styles/Timestamp.module.css';

interface TimestampProps {
  lastUpdatedTime: string;
  fetchingData: boolean;
}

export const Timestamp = ({
  lastUpdatedTime,
  fetchingData,
}: TimestampProps) => {
  let stylesString = styles.lastUpdated;
  if (fetchingData) {
    stylesString += ' ' + styles.refreshed;
  }
  return (
    <div className={styles.timestamp}>
      <span className={stylesString}>Last updated: {lastUpdatedTime}</span>
    </div>
  );
};
