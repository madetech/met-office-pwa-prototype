import styles from '../styles/Search.module.css';

export const Search = () => {
  return (
    <section className="tile">
      <form className={styles.search}>
        <label htmlFor="searchLocation">
          What location would you like to search?
          <span>eg. Town, City, Postcode.</span>
        </label>
        <div className={styles.inputs}>
          <input type="text" id="searchLocation" />
          {/* <input type="submit" value="Search" /> */}
          <button>Search</button>
        </div>
      </form>
    </section>
  );
};
