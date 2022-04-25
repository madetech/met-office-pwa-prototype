import styles from '../../styles/Navigation.module.css';
import Image from 'next/image';

export const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.elementContainer}>
        <div>
          <Image
            src={`/assets/met-office-logo-white.svg`}
            width={144}
            height={72}
            alt="Met office logo"
          />
        </div>
        <div className={styles.iconsContainer}>
          <div className={styles.iconContainer}>
            <Image
              src={`/assets/filter-icon.svg`}
              alt="Filter"
              width={24}
              height={24}
              className={styles.icon}
            />
          </div>
          <div className={styles.iconContainer}>
            <Image
              src={`/assets/settings-icon.svg`}
              alt="Settings"
              width={24}
              height={24}
              className={styles.icon}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
