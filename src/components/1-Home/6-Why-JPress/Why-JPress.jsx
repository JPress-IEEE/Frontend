import "./Why-JPress.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
export default function WhyJPress() {
  return (
    <div className="WhyJPress">
      <div className="bar">
        <h1>Why JPress</h1>
        <p>Why choose Jpress? Discover our key benefits.</p>
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
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="col top">
            <img src="img/Popular-1.png" alt="" />
            <div className="text">
              <h3>Home Cleaning</h3>
              <p>Projects starting at 50$</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col boton ">
            <img src="img/Popular-1.png" alt="" />
            <div className="text">
              <h3>Home Cleaning</h3>
              <p>Projects starting at 50$</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col top">
            <img src="img/Popular-1.png" alt="" />
            <div className="text">
              <h3>Home Cleaning</h3>
              <p>Projects starting at 50$</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col boton">
            <img src="img/Popular-1.png" alt="" />
            <div className="text">
              <h3>Home Cleaning</h3>
              <p>Projects starting at 50$</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col top">
            <img src="img/Popular-1.png" alt="" />
            <div className="text">
              <h3>Home Cleaning</h3>
              <p>Projects starting at 50$</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col boton">
            <img src="img/Popular-1.png" alt="" />
            <div className="text">
              <h3>Home Cleaning</h3>
              <p>Projects starting at 50$</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div  className="col top">
            <img src="img/Popular-1.png" alt="" />
            <div className="text">
              <h3>Home Cleaning</h3>
              <p>Projects starting at 50$</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
