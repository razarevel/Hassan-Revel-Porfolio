import { Link } from "react-router-dom";

export default function AboutAI() {
  const para = [
    `In the modern world, AI is becoming an
  invaluable part of daily life, offering
  vast opportunities for businesses,
  researchers, and consumers. As an AI
  Engineer, I create cutting-edge AI
  solutions for businesses, researchers,
  and individuals, helping them
  seamlessly integrate these innovations
  into their existing infrastructure.`,
    `“Just as electricity transformed almost
  everything 100 years ago, today I
  actually have a hard time thinking of an
  industry that I don’t think AI will
  transform in the next several years.”`,
    `Former chief scientist at Baidu, Co-founder at Coursera`,
  ];
  const fontStyle = `text-[16px] leading-[2] lg:text-[1.125vw] lg:max-w-[48.625vw]`;
  const img = `https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/images/AI+Girl.jpg`;
  return (
    <section id="aboutAI" className="lg:max-w-[94.375vw] mx-auto">
      <div className="bg-[#1C1C1F] text-white lg:pt-[4.125vw] lg:pb-[2vw] lg:px-[2.313vw] ">
        {/* logo */}
        <h1 className="text-[44px] lg:text-[2.5vw] font-Black px-[30px] pt-[15px] lg:p-0">
          R.
        </h1>
        <div className="flex flex-col lg:flex-row">
          {/* img */}
          <div className="lg:w-[40%] order-2 lg:order-1 relative">
            <div className="lg:w-[50.875vw] lg:h-[70%] lg:absolute lg:left-[-19vw] lg:top-[6vw] w-full">
              <img src={img} alt="" className="w-full" />
            </div>
          </div>
          {/* context */}
          <div className="space-y-4 lg:w-[60%] lg:space-y-[1.75vw] order-1 lg:order-2 p-[30px] lg:p-0">
            {/* heading */}
            <div className="text-[34px] lg:text-[5.25vw] lg:leading-[0.9]  font-Black  leading-[1.2] uppercase overflow-hidden">
              <p className="text-bg">
                artificial int. <br /> ENGINEER{" "}
              </p>
            </div>
            <p className={fontStyle}>{para[0]}</p>
            {/* border */}
            <div className="w-full border lg:max-w-[48.625vw] lg:opacity-50"></div>
            {/* quote */}
            <p className={fontStyle}>{para[1]}</p>
            {/* Andrew Ng */}
            <h1 className="text-[24px] lg:text-[2.5vw] font-Bold ">
              Andrew Ng
            </h1>
            <p className={fontStyle}>{para[2]}</p>
            <div className="w-full py-[40px] flex items-center justify-center lg:justify-end lg:max-w-[48.625vw]">
              <Link to="/contact" className="w-full max-w-[300px]">
                {" "}
                <div className="text-center bg-white text-black uppercase text-[14px] py-[22px] font-Bold hover:bg-heavyBlue duration-300 hover:text-white w-full">
                  Contact Revel
                </div>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
