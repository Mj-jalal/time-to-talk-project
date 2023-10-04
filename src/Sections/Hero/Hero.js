import { SecondaryButton } from '../../Components'
import './Hero.css'
import HeroSlide from '../HeroSilde/HeroSlide'

const Hero =()=>{
    
    return(
            <div className='hero-main'>
                <div className='container'>
                    <div className='hero-text'>
                        <h1>Listen to Pod Talk</h1>
                        <p>Listen it everywhere. Explore your fav podcasts</p>
                        <div className='py-4'>
                        <SecondaryButton>
                            Start Listening
                        </SecondaryButton>
                        </div>
                    </div>
                </div>
                <HeroSlide/>
            </div>
    )
}
export default Hero