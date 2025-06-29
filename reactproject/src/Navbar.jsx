import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/top10" className={styles.navLink}>Top 10</Link>
        <Link to="/games" className={styles.navLink}>Games</Link>
        <Link to="/contact" className={styles.navLink}>Contact</Link>
        <Link to="/gallery" className={styles.navLink}>Gallery</Link>
      </div>
    </nav>
  )
}

export default Navbar 