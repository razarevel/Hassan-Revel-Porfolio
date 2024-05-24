import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import { Autoplay } from "swiper/modules";
export default function ReviewSlider() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener when component mounts
    window.addEventListener("resize", handleResize);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sliderPerViews = (width: number) => {
    if (width >= 1024) return 3;
    if (width < 1024 && width >= 768) return 2;
    return 1;
  };
  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        spaceBetween={50}
        slidesPerView={sliderPerViews(windowWidth)}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="md:max-w-[90vw] lg:max-w-[80vw] relative my-swiper"
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index} className="px-[16px] select-none relative">
            <Cards />
          </SwiperSlide>
        ))}
        <div className="w-[20vw] h-full absolute top-0 left-[-20vw] bg-white z-30"></div>
        <div className="w-[20vw] h-full bg-white  absolute top-0 right-[-20vw] z-30"></div>
      </Swiper>
    </div>
  );
}
