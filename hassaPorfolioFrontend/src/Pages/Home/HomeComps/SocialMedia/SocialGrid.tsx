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
  return (
    <section id="socialGrid">
      <div className="space-y-20  text-black max-w-[280px] mx-auto">
        {socialContext.map((el, index) => (
          <div>
            <Link to={el.link} key={index} target="_blank">
              <div className="bg-white relative flex flex-col items-center justify-center">
                <div className="absolute bottom-[-16px]  bg-white w-[33px] h-[33px] rotate-45"></div>
                {/* img */}
                <div
                  className={
                    " flex items-center justify-center h-[87px] w-full " +
                    custombg[index]
                  }
                >
                  <img src={el.img} alt="" className="w-[23px]" />
                </div>
                {/* text */}
                <div className="text-center pb-[55px]">
                  <p className="text-[16px] mt-[19px] text-[#767676]">
                    {el.tag}
                  </p>
                  <p className="text-[#1c1c1f] font-Bold text-[37px] mt-[34px]">
                    {el.name}
                  </p>
                  <p className="max-w-[200px] pt-[29px] mx-auto leading-[1.4] text-[#4c4c4c]">
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
