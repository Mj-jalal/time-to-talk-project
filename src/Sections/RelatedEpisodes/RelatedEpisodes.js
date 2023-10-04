import { SectionHeader, TrendingEpisodeCard  } from '../../Components'
import './RelatedEpisodes.css'
import TrandingEpisodeData from '../../Data/TrandingEpisodeData'



function RelatedEpisodes() {
    const card = TrandingEpisodeData.map(card=>{
        return <TrendingEpisodeCard key={card.id} card={card}/>
    })
  return (
    <div className='related-episode-container'>
        <SectionHeader>
           Related episodes
        </SectionHeader>
        <div className='related-episode-cards mt-5'>
            {card}
        </div>
    </div>
  )
}

export default RelatedEpisodes