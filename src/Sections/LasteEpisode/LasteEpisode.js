import LasteEpisodeCard from '../../Components/LasteEpisodeCard/LasteEpisodeCard'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import LasteEpisodeData from '../../Data/LasteEpisodeData'
import './LasteEpisode.css'


const LasteEpisode =()=>{
    const episode_card = LasteEpisodeData.map(podcast=>{
        return <LasteEpisodeCard key={podcast.id} podcast={podcast}/>
    })
    return(
        <div className='laste-episode'>
            <SectionHeader>
              Lastest episodes
            </SectionHeader>
            <div className='row laste-episode-cards'>
                {episode_card}
            </div>
        </div>
    )
}
export default LasteEpisode