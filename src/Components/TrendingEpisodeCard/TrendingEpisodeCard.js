import UserInfo from '../UserInfo/UserInfo'
import './TrendingEpisodeCard.css'
import {FaHeadphones, FaHeart, FaMessage } from "react-icons/fa6";
const TrendingEpisodeCard=({card})=>{
    return(
        <div className='trending-episode-card-container'>
            <img className='trending-episode-img-card' src={card.podcast_img} alt=''/>
            <div className='trending-episode-content-card'>
                <h4 className='trending-episode-title'><a href='#'>{card.podcast_title}</a></h4>
                <UserInfo name={card.name} work={card.work} avatar={card.avatar_img} text={card.text}/>
                <ul className='trending-episode-card-social'>
                    <li><span className='social-icon'><FaHeadphones/></span> {card.listening}</li>
                    <li><span className='social-icon'><FaHeart/></span> {card.like}</li>
                    <li><span className='social-icon'><FaMessage/></span> {card.comment}</li>
                </ul>
            </div>
        </div>
    )
}

export default TrendingEpisodeCard