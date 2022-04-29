import styles from '../styles/Timestamp.module.css';

interface TimestampProps {
  lastUpdatedTime: string;
  fetchingData: boolean;
  setFetchingData: any;
}

export const Timestamp = ({
  lastUpdatedTime,
  fetchingData,
  setFetchingData,
}: TimestampProps) => {
  let stylesString = styles.lastUpdated;
  if (fetchingData) {
    stylesString += ' ' + styles.refreshed;
    // setFetchingData(false);
  }
  return (
    <div className={styles.timestamp}>
      <span className={stylesString}>Last updated: {lastUpdatedTime}</span>
    </div>
  );
};
