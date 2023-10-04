import { SectionHeader } from '../../Components'
import './MeetPodcaters.css'
import MeetPodcatersData from '../../Data/HeroData'
import MeetPodcatersCard from '../../Components/MeetPodcatersCard/MeetPodcatersCard'

function MeetPodcaters() {
    const card = MeetPodcatersData.map(card=>{
        return card.contStatus&& <MeetPodcatersCard key={card.id} card={card}/>
    })
  return (
    <div className='Meet-podcaters'>
        <SectionHeader>
             Meet podcaters
        </SectionHeader>
        <div className='mt-4 row'>
            {card}
        </div>
    </div>
  )
}

export default MeetPodcaters