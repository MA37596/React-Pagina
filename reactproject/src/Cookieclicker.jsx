import { useState } from 'react'
import styles from './Cookieclicker.module.css'

export function CookieClicker() {
    const [score, setScore] = useState(0)
    const [grandmas, setGrandmas] = useState(0)

    const handleClick = () => {
        setScore(prevScore => prevScore + 1 + grandmas)
    }

    const buyGrandma = () => {
        const grandmaCost = Math.floor(20 * Math.pow(1.15, grandmas))
        if (score >= grandmaCost) {
            setGrandmas(prevGrandmas => prevGrandmas + 1)
            setScore(prevScore => prevScore - grandmaCost)
        }
    }

    const grandmaCost = Math.floor(20 * Math.pow(1.15, grandmas))

    return (
        <section className={styles.container}>
            <h2>Koekje Klikker</h2>
            <div className={styles.score}>Score: {score}</div>
            <button 
                className={styles.cookie}
                onClick={handleClick}
                aria-label="Klik om punten te verdienen"
            >
                🍪
            </button>
            <div className={styles.upgrades}>
                <div className={styles.upgradeItem}>
                    <label htmlFor="grandma">Oma's: {grandmas}</label>
                    <button 
                        className={styles.upgrade}
                        onClick={buyGrandma}
                        disabled={score < grandmaCost}
                    >
                        Koop oma ({grandmaCost} koekjes)
                    </button>
                </div>
            </div>
        </section>
    )
}