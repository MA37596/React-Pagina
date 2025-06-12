import React from 'react'
import Top10List from '../Top10item.jsx'
import styles from './Top10.module.css'

const Top10 = () => {
  return (
    <div className={styles.top10Container}>
      <section className={styles.section}>
        <h2>Top 10 Items</h2>
        <Top10List />
      </section>
    </div>
  )
}

export default Top10 