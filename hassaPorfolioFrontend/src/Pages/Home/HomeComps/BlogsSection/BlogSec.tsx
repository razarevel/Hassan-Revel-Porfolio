import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import BlogSecGrid from "./BlogSecGrid";
import { motion, useInView } from "framer-motion";

export default function BlogSec() {
  const linkContext = [
    { text: "read blogs", link: "/blogs" },
    { text: "SUBSCRIBE", link: "#footer" },
  ];
  const text = `Look at the behind the scenes of my life in AI, AI Solutions and how I strive for
  success everyday.
  `;
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
  const imgFn = (width: number) => {
    if (width >= 1024)
      return "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/images/blogsImglg.jpg";
    return "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/images/blogsImg.jpg";
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="blogSec" className="my-[56px] lg:my-[6.6vw] relative">
      <div className="absolute w-[15%] h-[5%] top-[30%] left-0" ref={ref}></div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full">
        <div className="px-[30px] lg:px-[6.6vw]  space-y-[34px] h-[385px] lg:h-[38.5vw]   relative flex flex-col lg:w-[54.875vw]">
          <div className="w-full h-full absolute left-0 top-0 z-[-10] overflow-hidden">
            <div className="w-full h-full absolute bg-white top-0 left-0 blog-img "></div>
            <div className="w-full h-full absolute bg-white left-0 top-0 opacity-90 "></div>
          </div>
          <h1 className="text-[44px] lg:text-[5vw] font-Black text-heavyBlue">
            {"Blogs".split("").map((el, index) => (
              <motion.div
                className="inline-block origin-right"
                key={index}
                initial={{ scaleX: 0, opacity: 0, x: 100 }}
                animate={isInView && { scaleX: 1, opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "linear",
                }}
              >
                {el}
              </motion.div>
            ))}
          </h1>
          <p className="text-[16px] leading-[2] lg:text-[1vw]">{text}</p>
          {/* btn */}
          <div className="flex space-x-4 lg:space-x-[2vw] max-w-[306px] lg:max-w-[24vw]">
            <div className="w-[50%]">
              <Link to={linkContext[0].link}>
                <div className="text-[11px] sm:text-[14px]  font-SemiBold py-[18px] px-[8px] text-center uppercase lg:text-[0.875vw] review-border text-black   hero-btn-border lg:px-0 lg:w-[12.5vw] lg:py-[1.313vw] hover:bg-darkBlue hover:text-white duration-300">
                  {linkContext[0].text}
                </div>
              </Link>
            </div>
            <div className="w-[50%]">
              <a href={linkContext[1].link}>
                <div className="text-[11px] sm:text-[14px]  font-SemiBold py-[18px] px-[8px] text-center uppercase lg:text-[0.875vw] review-border text-black   hero-btn-border lg:px-0 lg:w-[12.5vw] lg:py-[1.313vw] hover:bg-darkBlue hover:text-white duration-300">
                  {linkContext[1].text}
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* img */}
        <div className="w-full lg:w-[44vw]">
          <img src={imgFn(windowWidth)} alt="" className="w-full" />
        </div>
      </div>
      <BlogSecGrid />
    </section>
  );
}
