import { Link } from "react-router-dom";
import ReviewSlider from "./ReviewSlider";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative pb-[5.438vw] pt-[56px] lg:pt-[5vw] "
    >
      <div className="w-full h-full  absolute top-0 left-0 z-10 select-none ">
        <img
          src="https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/homepage/testimonials-icon-overlay2.jpg"
          alt=""
          className="absolute bottom-0 lg:left-[-8.313vw] lg:w-[50.75vw]"
        />
      </div>
      <ReviewSlider />
      {/* btn */}
      <div className="w-full px-[16px] relative review-btn mt-[106px] lg:mt-[2vw]">
        <Link to={"/success"}>
          <div
            className="review-border duration-300 hover:bg-heavyBlue hover:text-white font-SemiBold hove uppercase text-[14px] py-[22px] text-center w-full sm:max-w-[300px] lg:max-w-[20.75vw] xl:max-w-[14.75vw] mx-auto"
            style={{ zIndex: "30 !important" }}
          >
            Read Success stories
          </div>
        </Link>
      </div>
    </section>
  );
}
