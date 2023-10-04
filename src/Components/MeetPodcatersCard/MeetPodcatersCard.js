import './MeetPodcatersCard.css'
import { HeroCard } from '../../Components/index'



function MeetPodcatersCard({card}) {
  return (
    <div className='meet-podcater-card col-lg-3 col-md-6'>
       <HeroCard image={card.image} name={card.name} work={card.work} contStatus={card.contStatus}/>
    </div>
  )
}

export default MeetPodcatersCard