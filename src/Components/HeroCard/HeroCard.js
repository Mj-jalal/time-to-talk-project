// import { SwiperSlide } from 'swiper/react'
import { Badge } from '../../Components/index'
import { FaTwitter,FaFacebook } from "react-icons/fa6";
import verified_img from '../../Assets/images/verified.png'
import './HeroCard.css'

const HeroCard =(props)=>{
    return(
        <div className='card-container'>
            <div className='header-card'>
                <img src={props.image} alt=''/>
            </div>
            <div className='content-card'>
                <h4>{props.name} <span className='verified-img'>{props.contStatus&& <img src={verified_img} alt=''/>}</span></h4>
                <Badge work={props.work}/>
            </div>
            <div className='social-media'>
                <FaFacebook className='fa-facebook'/>
                <FaTwitter className='fa-twitter'/>
            </div>
        </div>
    )
}
export default HeroCard