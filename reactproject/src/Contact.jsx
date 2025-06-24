import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact</h1>
      <div className={styles.content}>
        <section className={styles.contactInfo}>
          <h2>Contactgegevens</h2>
          <div className={styles.contactDetails}>
            <p>Email: 37596@ma-web.nl</p>
            <p>Telefoon: 06-12345678</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 