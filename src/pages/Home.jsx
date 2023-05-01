import { Link } from 'react-router-dom'

import DragonBall from '../images/dragon_ball.webp'
import Tonikaku from '../images/tonikaku.jpg'
import Erased from '../images/erased.png'
import SpyXFamily from '../images/spy_x_family.jpg'
import Shadow from '../images/emminence_in_shadow.jpg'
import KurokoNoBasket from '../images/kuroko_no_basket.jpg'

function Home(){

    return(
        <div className="Homepage">
            
            <div className='homepage-title'>
                <h1>15 Anime to watch</h1>

                <p>
                    
                    We've compiled a selection of 15 exceptional anime titles for six distinct genres: Action, Mystery, Romance, Sports, Classics, and Slice of Life. 
                    
                    This handpicked collection comprises of both widely popular anime and lesser-known, 
                    yet brilliant gems, offering a wide range of options to suit your preferences.<br></br>
                    Enjoy!
                    
                </p>
            </div>

            <div className="homepage-categories">
          
                <Link to={'/10-action-anime-to-watch'}>
                    <img src={Shadow} alt="Anime Image" className="anime-image"/>
                    <h5>Action</h5>
                </Link>

                <Link to={'/10-mystery-anime-to-watch'}>
                    <img src={Erased} alt="Anime Image" className="anime-image"/>
                    <h5>Mystery</h5>
                </Link>
             
                <Link to={'/10-romance-anime-to-watch'}>
                    <img src={Tonikaku} alt="Anime Image" className="anime-image"/>
                    <h5>Romance</h5>
                </Link>
                
                <Link to={'/10-classics-anime-to-watch'}>
                    <img src={DragonBall} alt="Anime Image" className="anime-image"/>
                    <h5>Classics</h5>
                </Link>
           
                <Link to={'/10-slife-of-life-anime-to-watch'}>
                    <img src={SpyXFamily} alt="Anime Image" className="anime-image"/>
                    <h5>Slife of Life</h5>
                </Link>

                <Link to={'/10-sport-anime-to-watch'}>
                    <img src={KurokoNoBasket} alt="Anime Image" className="anime-image"/>
                    <h5>Sport</h5>
                </Link>
           
                
            </div>

           

  

        </div>
    )
}

export default Home

{/* <div className='homepage-main'>
    <h3 className='homepage-title'>Anime Sanctuary</h3>
    <img src={Erased} alt="Anime GIF" className="anime-gif"/>
</div> */}

{/* <div className="anime-categories">
    
</div> */}