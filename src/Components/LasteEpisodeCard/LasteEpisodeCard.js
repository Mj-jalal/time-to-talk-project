import { SecondaryButton } from '../Buttons/Buttons'
import './LasteEpisodeCard.css'
import { FaClock, FaHeadphones, FaHeart, FaMessage, FaDownload, FaRegBookmark } from "react-icons/fa6";

import {UserInfo} from '../../Components/index';

const LasteEpisodeCard =({podcast})=>{
    
    return(
       <div className='col-lg-6'>
         <div className='episode-card-container my-1'>
            <div className='poscast-image-container'>
                <div className='podcast-image'><img src={podcast.podcast_img} alt=''/></div>
                <SecondaryButton>
                    subscribe
                </SecondaryButton>
            </div>
            <div className='podcast-content-container'>
                <div className='podcast-info'>
                    <p><span className='me-3'><FaClock className='click-podcast'/> {podcast.podcast_time} Minutes</span> <span>Episode <span className='episode'>{podcast.episode}</span></span></p>
                    <h4><a href='#'>{podcast.podcast_title}</a></h4>
                </div>

                  <UserInfo name={podcast.name} work={podcast.work} avatar={podcast.avatar_img} text={podcast.text}/>
                <ul className='social-info'> 
                    <li><FaHeadphones className='podcast-icon'/> {podcast.listening}k</li>
                    <li><FaHeart className='podcast-icon'/> {podcast.like}k</li>
                    <li><FaMessage className='podcast-icon'/> {podcast.comment}k </li>
                    <li><FaDownload className='podcast-icon'/> {podcast.download}k</li>
                </ul>
            </div>
            <div className='container-badge'>
                <div className='mb-3'><FaHeart/></div>
                <div className='mb-3'><FaRegBookmark/></div>
                
            </div>
         </div>
       </div>
    )
}
export default LasteEpisodeCard