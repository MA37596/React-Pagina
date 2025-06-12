import styles from './Top10Item.module.css'

export function Top10Item({ title, author, number }) {
    const getAlbumCover = (title) => {
        const covers = {
            'Lil Uzi Vert - Pink Tape': '/src/album fotos/pinktape.jpg',
            'Kanye West - My Beautiful Dark Fantasy': '/src/album fotos/mbdtf.jpg',
            'Playboi Carti - Whole Lotta Red': '/src/album fotos/wholelottared.png',
            'Drake - Certified Lover Boy': '/src/album fotos/Drake_-_Certified_Lover_Boy.png',
            'Lil Uzi Vert - Eternal Atake': '/src/album fotos/Eternal_Atake_Lil_Uzi_Vert.jpg',
            'Travis Scott - Astroworld': '/src/album fotos/astroworld.jpg',
            'Lil Uzi Vert - Eternal Atake 2': '/src/album fotos/600x600bb-1.webp',
            'Lil Uzi Vert - Luv Is Rage 2': '/src/album fotos/ab67616d0000b2730e4e16d910115fead3e83496.jpg',
            'Playboi Carti - Die Lit': '/src/album fotos/Die_Lit_by_Playboi_Carti.jpg',
            'Playboi Carti - Music': '/src/album fotos/music.jpg'
        }
        return covers[title] || ''
    }

    return (
        <li className={styles.album}>
            <div className={styles.number}>{number}</div>
            <img 
                src={getAlbumCover(title)} 
                alt={`${title} album cover`} 
                className={styles.albumCover}
            />
            <div className={styles.albumInfo}>
                <h3>{title}</h3>
                <h4>{author}</h4>
            </div>
        </li>
    )
}

export function Top10List() {
    const albums = [
        { title: "Lil Uzi Vert - Pink Tape", author: "Lil Uzi Vert", number: "1" },
        { title: "Kanye West - My Beautiful Dark Fantasy", author: "Kanye West", number: "2" },
        { title: "Playboi Carti - Whole Lotta Red", author: "Playboi Carti", number: "3" },
        { title: "Drake - Certified Lover Boy", author: "Drake", number: "4" },
        { title: "Lil Uzi Vert - Eternal Atake", author: "Lil Uzi Vert", number: "5" },
        { title: "Travis Scott - Astroworld", author: "Travis Scott", number: "6" },
        { title: "Lil Uzi Vert - Eternal Atake 2", author: "Lil Uzi Vert", number: "7" },
        { title: "Lil Uzi Vert - Luv Is Rage 2", author: "Lil Uzi Vert", number: "8" },
        { title: "Playboi Carti - Die Lit", author: "Playboi Carti", number: "9" },
        { title: "Playboi Carti - Music", author: "Playboi Carti", number: "10" }
    ]

    return (
        <section className='top10'>
            <h1>Top 10 Favorite Albums</h1>
            <ol className='album__list'>
                {albums.map(album => (
                    <Top10Item
                        key={album.number}
                        title={album.title}
                        author={album.author}
                        number={album.number}
                    />
                ))}
            </ol>
        </section>
    )
}

export default Top10List;
    