import styles from '../../styles/Footer.module.css';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { ImMap2 } from 'react-icons/im';
import { BsExclamationTriangle } from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerIcons}>
          <div className={`${styles.footerIcon} ${styles.footerFirstIcon}`}>
            <TiWeatherPartlySunny />
            <div>Weather</div>
          </div>
        </div>
        <div className={styles.footerIcons}>
          <div className={styles.footerIcon}>
            <ImMap2 />
            <div>Maps</div>
          </div>
        </div>
        <div className={styles.footerIcons}>
          <div className={styles.footerIcon}>
            <BsExclamationTriangle />
            <div>Warnings</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
