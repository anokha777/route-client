// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide><img src="https://img.freepik.com/premium-vector/abstract-technology-background-with-light-effect-digital-technology-deep-learning-big-data_258787-376.jpg?w=826" alt="background1" /></SwiperSlide>
        <SwiperSlide><img src="https://img.freepik.com/free-vector/infographic-template-with-photo_23-2148471143.jpg?t=st=1709487196~exp=1709487796~hmac=2f398779f1d6239b9fb2b9efc5a2f557e419e60a9f7dfce72203b23de9d4da63" alt="background3" /></SwiperSlide>
        <SwiperSlide><img src="https://bestclickphotography.com/images/slider_3.jpg" alt="background3" /></SwiperSlide>
        <SwiperSlide><img src="https://bestclickphotography.com/images/home-banner-mini-2.jpg" alt="background4" /></SwiperSlide>
        <SwiperSlide><img src="https://bestclickphotography.com/images/slider_2.jpg" alt="background5" /></SwiperSlide>
      </Swiper>
    </>
  );
}