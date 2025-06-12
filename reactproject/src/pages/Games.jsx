import CookieClicker from '../Cookieclicker';
import Pokemon from '../Pokemon';
import styles from './Games.module.css';

const Games = () => {
  return (
    <div className={styles.gamesContainer}>
      <section className={styles.section}>
        <h2>Cookie Clicker</h2>
        <CookieClicker />
      </section>
      
      <section className={styles.section}>
        <h2>Pokemon</h2>
        <Pokemon />
      </section>
    </div>
  );
};

export default Games; 