import { Link } from "react-router-dom";
import socialContext from "./SocialContext";

export default function SocialGrid() {
  const custombg = [
    "bg-[#0077b5]",
    "bg-[#cd201f]",
    "insta-bg",
    "bg-[#4d6baa]",
    " bg-[#4fc6f8]",
  ];
  const customMT = [
    "lg:pt-[9.875vw]",
    "lg:pt-[3.975vw]",
    "",
    "lg:pt-[3.975vw]",
    "lg:pt-[9.875vw]",
  ];
  return (
    <section id="socialGrid" className="">
      <div className="space-y-20  text-black max-w-[280px] mx-auto lg:flex lg:max-w-[92.375vw] lg:space-y-0 lg:space-x-[1vw]">
        {socialContext.map((el, index) => (
          <div className={`lg:w-full  ${customMT[index]}`} key={index}>
            <Link to={el.link} target="_blank">
              <div className="bg-white relative flex flex-col items-center justify-start lg:w-full lg:h-[23.938vw]">
                <div className="absolute bottom-[-16px]  bg-white w-[33px] h-[33px] lg:w-[2.75vw] lg:h-[2.75vw] lg:bottom-[-1vw]  rotate-45"></div>
                {/* img */}
                <div
                  className={
                    " flex items-center justify-center h-[87px] w-full lg:h-[5.438vw] " +
                    custombg[index]
                  }
                >
                  <img
                    src={el.img}
                    alt=""
                    className="w-[23px] lg:w-[1.375vw]"
                  />
                </div>
                {/* text */}
                <div className="text-center pb-[55px] lg:pb-[2vw]">
                  <p className="text-[16px] mt-[19px] lg:mt-[1vw] text-[#767676] lg:text-[1vw]">
                    {el.tag}
                  </p>
                  <p className="text-[#1c1c1f] font-Bold text-[37px] mt-[34px] lg:mt-[1vw] lg:text-[2.938vw]">
                    {el.name}
                  </p>
                  <p className="max-w-[200px] pt-[29px] mx-auto leading-[1.4] text-[#4c4c4c] lg:text-[0.93vw] lg:max-w-[12.313vw] lg:pt-[2vw]">
                    {el.text}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
