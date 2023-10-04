import './HeroSlide.css'
import HeroData from '../../Data/HeroData'
import { HeroCard } from '../../Components'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
const HeroSlide=()=>{
    const card = HeroData.map(card=>{
        return (
            <SwiperSlide key={card.id}>
                <HeroCard   image={card.image} name={card.name} work={card.work} contStatus={card.contStatus}/>
            </SwiperSlide>
        ) 
    })
    return(
        <div className='container mt-5'>
             <Swiper
             slidesPerView={4}
             breakpoints={{
                0: {
                    slidesPerView: 1,
                  },
                  400:{
                    slidesPerView:1,
                  },
                  639: {
                    slidesPerView: 2,
                  },
                  865:{
                    slidesPerView:3
                  },
                  1000:{
                    slidesPerView:4
                  },
                  
             }}
             spaceBetween={20}
             freeMode={true}
             
             autoplay={{
                delay:2500,
                disableOnInteraction:false,
             }}
             pagination={{
                 clickable: true,
                }}
             modules={[FreeMode, Pagination, Autoplay]}
             className="mySwiper pb-5"
                >
                {card}
            </Swiper>
        </div>
    )
}

export default HeroSlide