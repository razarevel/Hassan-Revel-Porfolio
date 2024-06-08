import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import Cards from "./Cards";
import { Autoplay } from "swiper/modules";
import axios from "axios";
import useZustand from "../../../../utilities/zustand";
import { useQuery } from "@tanstack/react-query";
import { motion, useInView } from "framer-motion";

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
  const { apiUrl } = useZustand();
  const url = apiUrl + "reviews";
  const { isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => {
      axios
        .get(url)
        .then((res) => setReviews(res.data))
        .catch((err) => console.log(err));
    },
  });

  return (
    <div className="relative w-full overflow-hidden md:max-w-[90vw] lg:max-w-[80vw] mx-auto space-y-[36px] lg:space-y-[3vw]">
      <h1 className="text-[44px] lg:text-[3vw] text-center font-Black text-heavyBlue px-[16px]">
        Reviews
      </h1>
      <div>
        {isLoading &&
          [...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-full  h-[300px] lg:h-[16vw] rounded-lg overflow-hidden relative card-is-loading"
            ></div>
          ))}
      </div>
      {!isLoading && (
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
      )}
    </div>
  );
}
