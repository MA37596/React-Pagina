import styles from './AboutMe.module.css';
import profileImage from './assets/profielfoto.jpg';

export function AboutMe() {
  return (
    <article className={styles.AboutMe}>
      <img src={profileImage} alt="Over mij" className={styles.aboutMe__image} />
      <div>
        <h2 className={styles.aboutMe__title}>Rayan Aghmer</h2>
        <p className={styles.aboutMe__paragraph}>
          Ik ben een Student Software Developer aan het media college in amsterdam. 
        </p>
      </div>
    </article>
  );
}
