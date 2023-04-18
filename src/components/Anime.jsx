
import './Anime.css';
import { useEffect, useState } from 'react'
import Crunchyroll from '../icons/crunchyroll.webp';
import Youtube from '../icons/youtube.webp';
import MAL from '../icons/MAL.png';
import LeftIcon from '../icons/left_icon.png';
import RightIcon from '../icons/right_icon.png';

const image_link = 'https://firebasestorage.googleapis.com/v0/b/animetowatch-634b6.appspot.com/o/images%2F'
const gif_link = 'https://firebasestorage.googleapis.com/v0/b/animetowatch-634b6.appspot.com/o/gifs%2F'
const extension = '?alt=media'

function Anime(props) {

    const data = props.data;
    const [showGif, setShowGif] = useState(false);

    function nextAnime() {
        props.nextAnime();
    }

    function previousAnime() {
        props.previousAnime();
    }

    return (
        <section className="anime" onKeyDown={(e) => { if (e.key === 'ArrowLeft') { previousAnime; } }} onKeyUp={(e) => { if (e.key === 'ArrowRight') { nextAnime; } }} tabIndex={0}>
            <header>
                <div className="header-title">
                    10 Anime to watch
                </div>

                <div className='header-about'>
                    <p>About</p>
                    <a href='https://myanimelist.net/topanime.php'><p className='header-about-item2'>AnimeList</p></a>
                </div>

                <div className="header-links">
                    <a href={data.youtube}><img src={Youtube} alt="Youtube" /></a>
                    <a href={data.crunchyroll}><img src={Crunchyroll} alt="Crunchyroll" /></a>
                    <a href={data.url}><img src={MAL} alt="MAL" /></a>
                </div>

                <div className="header-info">
                    <a href='https://anime-sanctuary.netlify.app/'>More</a>
                </div>
            </header>
            <main>
                <div className='image' onMouseOver={() => setShowGif(true)} onMouseOut={() => setShowGif(false)}>

                    {showGif ? 
                        <img src={gif_link + data.gif + extension} loading='lazy' alt={data.title} /> 
                    : 
                        <img src={image_link + data.image + extension} loading='lazy' alt={data.title} />
                    }
                </div>
                <div className='content'>

                    <div className='theme'>
                        <div className='theme-title'>
                            <b>Genre</b>
                        </div>

                        <div className='themes'>
                            <div className='theme1'>{data.genre[0]}</div>
                            <div className='theme2'>{data.genre[1]}</div>
                            <div className='theme3'>{data.genre[2]}</div>
                        </div>
                    </div>

                    <div className='description'>
                        <p>{data.description}</p>
                    </div>                
                </div>
                <div className='info'>
                    <div className='info-title'>{data.title}</div>
                    
                    <div className='info-content'>
                        <div className='id'># {data.id}</div>
                        <div className='episodes'>Ep.{data.episodes}</div>
                        <div className='rating'>Rating: {data.rating}</div>
                        <div className='location'>{data.type}</div>

                    </div>
                </div>
                <div className='navigation'>
                    <div className='navigation-left' onClick={previousAnime}>
                        <img src={LeftIcon} alt="Left Icon" />
                    </div>
                    <div className='navigation-right' onClick={nextAnime}>
                        <img src={RightIcon} alt="Right Icon" />
                    </div>
                </div>
            </main>     
        </section>
    );

}

export default Anime;