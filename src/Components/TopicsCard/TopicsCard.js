
import { SecondaryBadge } from '../Badge/Badge'
import './TopicsCard.css'

const TopicsCard=({card})=>{
    return(
        
            <div className='topics-card'>
                <a href='#'><img className='img' src={card.image} alt=''/></a>
                <div className='topics-card-content'>
                <h4>{card.work}</h4>
                <SecondaryBadge>
                    {card.episode} episode
                </SecondaryBadge>
                </div>
            </div>
        
    )
}

export default TopicsCard