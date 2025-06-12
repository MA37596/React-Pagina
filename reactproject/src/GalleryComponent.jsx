import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

// Import all album covers
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

const images = [
    {
        original: pinktape,
        thumbnail: pinktape,
        description: 'Lil Uzi Vert - Pink Tape'
    },
    {
        original: mbdtf,
        thumbnail: mbdtf,
        description: 'Kanye West - My Beautiful Dark Fantasy'
    },
    {
        original: wholelottared,
        thumbnail: wholelottared,
        description: 'Playboi Carti - Whole Lotta Red'
    },
    {
        original: clb,
        thumbnail: clb,
        description: 'Drake - Certified Lover Boy'
    },
    {
        original: eternalAtake,
        thumbnail: eternalAtake,
        description: 'Lil Uzi Vert - Eternal Atake'
    },
    {
        original: astroworld,
        thumbnail: astroworld,
        description: 'Travis Scott - Astroworld'
    },
    {
        original: eternalAtake2,
        thumbnail: eternalAtake2,
        description: 'Lil Uzi Vert - Eternal Atake 2'
    },
    {
        original: luvIsRage2,
        thumbnail: luvIsRage2,
        description: 'Lil Uzi Vert - Luv Is Rage 2'
    },
    {
        original: dieLit,
        thumbnail: dieLit,
        description: 'Playboi Carti - Die Lit'
    },
    {
        original: music,
        thumbnail: music,
        description: 'Playboi Carti - Music'
    }
];

function GalleryComponent() {
    return (
        <div className="gallery-container">
            <h1>Album Gallery</h1>
            <ImageGallery 
                items={images}
                showPlayButton={false}
                showFullscreenButton={true}
                showNav={true}
                showThumbnails={true}
                thumbnailPosition="bottom"
                slideInterval={3000}
            />
        </div>
    );
}

export default GalleryComponent; 