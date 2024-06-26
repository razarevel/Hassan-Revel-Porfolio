import axios from "axios";
import { useState } from "react";
import Cards from "../Home/HomeComps/Reviews/Cards";
import useZustand from "../../utilities/zustand";
import { useQuery } from "@tanstack/react-query";
interface Reviews {
  name: string;
  img: string;
  review: string;
  title: string;
}
export default function SuccessGrid() {
  const [reviews, setreviews] = useState<Reviews[]>([]);
  const { apiUrl } = useZustand();
  const url = apiUrl + "reviews";
  const { isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => {
      axios
        .get(url)
        .then((res) => setreviews(res.data))
        .catch((err) => console.log(err));
    },
  });
  return (
    <section
      id="successGrid"
      className="mt-[1.875vw] pt-[5.438vw] pb-[10.75vw] relative space-y-[36px] lg:space-y-[5vw] lg:max-w-[96vw]"
    >
      <img
        src="https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/testimonials/ip-testimonials-quote.png"
        alt=""
        className="absolute bottom-[4.375vw] lg:bottom-[2.375vw] left-[-8.313vw] w-[54.125vw] z-10"
      />
      <img
        src="https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/testimonials/ip-testimonials-bg.jpg"
        alt=""
        className="absolute w-full h-[70%] top-0 left-0"
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[3vw] px-[4vw] mx-auto relative z-20">
        {isLoading &&
          [...Array(6)].map((_, index) => (
            <div
              key={index}
              className="w-full  h-[800px] lg:h-[16vw] rounded-lg overflow-hidden relative card-is-loading "
            ></div>
          ))}
        {!isLoading &&
          reviews.map((el: Reviews, index) => (
            <Cards
              key={index}
              name={el.name}
              img={el.img}
              review={el.review}
              title={el.title}
            />
          ))}
      </div>

      <div className="w-full flex justify-end items-end max-w-[95vw]">
        <div className="review-border duration-300 text-heavyBlue hover:bg-heavyBlue hover:text-white font-SemiBold uppercase text-[14px] py-[22px] text-center relative z-20 w-[220px] h-[58px] bg-transparent flex items-center justify-center cursor-pointer">
          View more
        </div>
      </div>
    </section>
  );
}
