import "./carousel.css";
import {Virtual, Navigation, Pagination} from "swiper/modules";
import { Swiper, SwiperSlide} from "swiper/react";
import {Card} from "./index";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = ({data}) => {
  return ( 
    <div className="carousel-container">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={8}
        spaceBetween={30}
        // navigation={true}
        navigation={{nextEl: ".arrow-right", prevEl: ".arrow-left"}}
        virtual
      >
        {
          data.map((cardData)=>{
            return(
              <SwiperSlide key={cardData.id}>
                <Card
                  imgSrc={cardData.image}
                  label={cardData.title}
                  followsCount={cardData.follows}
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <div className="arrow-left arrow"><img src="leftIcon.png" alt="left-pointer" /></div>
      <div className="arrow-right arrow"><img src="rightIcon.png" alt="right-pointer" /></div>

    </div>
  )
}

export default Carousel;