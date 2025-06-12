import styles from './Top10Item.module.css'
import pinktape from './album fotos/pinktape.jpg'
import mbdtf from './album fotos/mbdtf.jpg'
import wholelottared from './album fotos/wholelottared.png'
import clb from './album fotos/Drake_-_Certified_Lover_Boy.png'
import eternalAtake from './album fotos/Eternal_Atake_Lil_Uzi_Vert.jpg'
import astroworld from './album fotos/astroworld.jpg'
import eternalAtake2 from './album fotos/600x600bb-1.webp'
import luvIsRage2 from './album fotos/ab67616d0000b2730e4e16d910115fead3e83496.jpg'
import dieLit from './album fotos/Die_Lit_by_Playboi_Carti.jpg'
import music from './album fotos/music.jpg'

function Top10Item({ title, author, number }) {
    const getAlbumCover = (title) => {
        const covers = {
            'Lil Uzi Vert - Pink Tape': pinktape,
            'Kanye West - My Beautiful Dark Fantasy': mbdtf,
            'Playboi Carti - Whole Lotta Red': wholelottared,
            'Drake - Certified Lover Boy': clb,
            'Lil Uzi Vert - Eternal Atake': eternalAtake,
            'Travis Scott - Astroworld': astroworld,
            'Lil Uzi Vert - Eternal Atake 2': eternalAtake2,
            'Lil Uzi Vert - Luv Is Rage 2': luvIsRage2,
            'Playboi Carti - Die Lit': dieLit,
            'Playboi Carti - Music': music
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

const Top10List = () => {
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
    