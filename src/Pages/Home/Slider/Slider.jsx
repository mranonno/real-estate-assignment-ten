import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "./Slider.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const Slider = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
          {/***** Slider 1 *****/}
        <SwiperSlide>
          <div className="slider1 slider lg:h-[550px] h-96">
            <div  className="bg-gradient-to-r from-slate-900 py-8 pl-4  bg-opacity-40 w-[70vw]">
              <h3 data-aos="fade-left" data-aos-duration="1000" className="text-white md:text-7xl text-4xl font-cormorant font-extrabold">
                Find Your Sanctuary with <br className="hidden md:flex" /> Pinecreast
                <span className="text-primary">Homes</span>
              </h3>
              <p data-aos="fade-up" data-aos-duration="1000" className="text-white opacity-80 my-5">
                Your Perfect Place: From cozy single-family homes to vibrant
                student housing and serene <br className="hidden md:flex" /> senior living communities, we
                cater to all.
              </p>
              <button data-aos="fade-up" data-aos-duration="1000" className="bg-primary px-5 py-2 rounded-lg text-lg font-medium text-white">
                Reach Out to Us
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/***** Slider 2 *****/}
        <SwiperSlide>
          <div className="slider2 slider lg:h-[550px] h-96">
            <div className="bg-gradient-to-r from-slate-900 py-8 pl-4 bg-opacity-40 w-[70vw]">
              <h3 data-aos="fade-left" data-aos-duration="1000" className="text-white text-4xl lg:text-7xl md:text-4xl  font-cormorant font-extrabold">
                Single-Family Homes
              </h3>
              <p data-aos="fade-up" data-aos-duration="1000" className="text-white opacity-80 my-5">
              Spacious, comfortable single-family homes offering privacy and tranquility, designed <br className="hidden md:flex" /> to fulfill the needs and desires of modern families.
              </p>
              <button data-aos="fade-up" data-aos-duration="1000" className="bg-primary px-5 py-2 rounded-lg text-lg font-medium text-white">
                Get in Touch With Us
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/***** Slider 3 *****/}
        <SwiperSlide>
          <div className="slider3 slider lg:h-[550px] h-96">
            <div className="bg-gradient-to-r from-slate-900 py-8 pl-4 bg-opacity-40 w-[70vw]">
              <h3 data-aos="fade-left" data-aos-duration="1000" className="text-white text-4xl lg:text-7xl md:text-4xl  font-cormorant font-extrabold">
                Apartment Space
              </h3>
              <p data-aos="fade-up" data-aos-duration="1000" className="text-white opacity-80 my-5">
              Modern apartments with amenities, stylish designs, and convenient locations, offering <br className="hidden md:flex" />comfort and community for contemporary urban living experiences.
              </p>
              <button data-aos="fade-up" data-aos-duration="1000" className="bg-primary px-5 py-2 rounded-lg text-lg font-medium text-white">
                Find Apartment Space
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/***** Slider 4 *****/}
        <SwiperSlide>
          <div className="slider4 slider lg:h-[550px] h-96">
            <div className="bg-gradient-to-r from-slate-900 py-8 pl-4  bg-opacity-40 w-[70vw]">
              <h3 data-aos="fade-left" data-aos-duration="1000" className="text-white text-4xl lg:text-7xl md:text-4xl  font-cormorant font-extrabold">
                Amazing Vacation Rentals
              </h3>
              <p data-aos="fade-up" data-aos-duration="1000" className="text-white opacity-80 my-5">
              Escape to our serene vacation rentals for unforgettable getaways, offering comfort,<br className="hidden md:flex" /> luxury, and breathtaking views for your ultimate relaxation.
              </p>
              <button data-aos="fade-up" data-aos-duration="1000" className="bg-primary px-5 py-2 rounded-lg text-lg font-medium text-white">
                Find Vacation Space
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
