import { TopicsCard,  SectionHeader } from '../../Components'

import './Topics.css'
import TopicsData from '../../Data/TopicsData'

const Topics =()=>{
    const topics = TopicsData.map(card=> <TopicsCard  key={card.image} card={card}/>)
    return(
        <div className='topics-container'>
            <SectionHeader>
                Topics
            </SectionHeader>
            <div className='topics-cards'>
                {topics}
            </div>
        </div>
       
    )
}

export default Topics