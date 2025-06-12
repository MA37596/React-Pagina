import styles from './Top10.module.css'
export function Top10(){
    return(
        <section className={styles.top10}>
            <h2>Top 10 Albums naar mijn Mening</h2>
            <ol className={styles.list}>
                <li>Lil Uzi Vert - Pink Tape</li>
                <li>Kanye West - My Beautiful Dark Fantasy</li>
                <li>Playboi Carti - Whole Lotta Red</li>
                <li>Drake - Certified Lover Boy</li>
                <li>Lil Uzi Vert - Eternal Atake</li>
                <li>Travis Scott - Astroworld</li>
                <li>Lil Uzi Vert - Eternal Atake 2</li>
                <li>Lil Uzi Vert - Luv Is Rage 2</li>
                <li>Playboi Carti - Die Lit</li>
                <li>Playboi Carti - Music</li>
            </ol>
        </section>
    )
}