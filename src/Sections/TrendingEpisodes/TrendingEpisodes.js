import { SectionHeader, TrendingEpisodeCard } from '../../Components'
import './TrendingEpisodes.css'
import TrandingEpisodeData from '../../Data/TrandingEpisodeData'
const TrendingEpisodes=()=>{
    const card = TrandingEpisodeData.map(card=>{
        return <TrendingEpisodeCard key={card.id} card={card}/>
    })
    return(
        <div className='trending-episodes-container'>
            <SectionHeader>
                 Trending episodes
            </SectionHeader>
            <div className='trending-episodes-cards'>
                {card}
            </div>
        </div>
    )
}

export default TrendingEpisodes