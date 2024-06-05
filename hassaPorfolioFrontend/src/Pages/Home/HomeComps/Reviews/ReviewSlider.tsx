import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import { Autoplay } from "swiper/modules";
import axios from "axios";

interface Reviews {
  name: string;
  img: string;
  review: string;
  title: string;
}
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
  const [reviews, setReviews] = useState<Reviews[]>([]);
  useEffect(() => {
    axios
      .get("https://api.hassanrevel.com/api/reviews")
      .then((res) => setReviews(res.data));
  }, []);
  return (
    <div className="relative w-full overflow-hidden md:max-w-[90vw] lg:max-w-[80vw] mx-auto space-y-[36px] lg:space-y-[3vw]">
      <h1 className="text-[44px] lg:text-[3vw] text-center font-Black text-heavyBlue px-[16px]">
        Reviews
      </h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={sliderPerViews(windowWidth)}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className=" relative my-swiper"
      >
        {reviews.map((el: Reviews, index: any) => (
          <SwiperSlide key={index} className="px-[16px] select-none relative">
            <Cards
              name={el.name}
              img={el.img}
              review={el.review}
              title={el.title}
            />
          </SwiperSlide>
        ))}
        <div className="w-[20vw] h-full absolute top-0 left-[-20vw] bg-white z-30"></div>
        <div className="w-[20vw] h-full bg-white  absolute top-0 right-[-20vw] z-30"></div>
      </Swiper>
    </div>
  );
}
