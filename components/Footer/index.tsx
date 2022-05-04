import styles from '../../styles/Footer.module.css';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { ImMap2 } from 'react-icons/im';
import { IoIosWarning } from 'react-icons/io';

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerIcons}>
          <TiWeatherPartlySunny className={styles.footerIcon} />
        </div>
        <div className={styles.footerIcons}>
          <ImMap2 className={styles.footerIcon} />
        </div>
        <div className={styles.footerIcons}>
          <IoIosWarning className={styles.footerIcon} />
        </div>
      </div>
    </footer>
  );
};
