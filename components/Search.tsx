import styles from '../styles/Search.module.css';

export const Search = () => {
  return (
    <section className="tile">
      <form className={styles.search}>
        <label htmlFor="searchLocation">
          What location would you like to search?
          <span>For example, Town or City or Postcode.</span>
        </label>
        <div className={styles.inputs}>
          <input type="text" id="searchLocation" disabled />
          <button disabled>Search</button>
        </div>
      </form>
    </section>
  );
};
