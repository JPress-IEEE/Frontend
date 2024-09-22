import "./Discover.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
function Discover() {
  return (
    <div className="Discover container px-4 md:px-8 lg:px-10 my-24">
      <div className="bar">
        <h1 className="my-20">Discover</h1>
      </div>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img style={{ width: "34px" }} src="img/Discover-1.svg" alt="" />
          <p>Cleaning</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/Discover-2.svg" alt="" />

          <p>Cleaning</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/Discover-3.svg" alt="" />
          <p>Cleaning</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/Discover-4.svg" alt="" />
          <p>Cleaning</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/Discover-5.svg" alt="" />
          <p>Cleaning</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/Discover-6.svg" alt="" />
          <p>Cleaning</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/Discover-7.svg" alt="" />
          <p>Cleaning</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/Discover-8.svg" alt="" />
          <p>Cleaning</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Discover;
