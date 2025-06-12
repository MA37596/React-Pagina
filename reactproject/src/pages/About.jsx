import React from 'react'
import AboutMe from '../Aboutme.jsx'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.section}>
        <h2>About Me</h2>
        <AboutMe />
      </section>
    </div>
  )
}

export default About 