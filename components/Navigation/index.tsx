import styles from '../../styles/Navigation.module.css';
import Image from 'next/image';

export const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.elementContainer}>
        <div>
          <Image
            src={`/assets/met-office-logo-white.svg`}
            width={116}
            height={58}
            alt="Met office logo"
          />
        </div>
        <div className={styles.iconsContainer}>
          <button className={styles.menuButton}>Menu</button>
        </div>
      </div>
    </nav>
  );
};
