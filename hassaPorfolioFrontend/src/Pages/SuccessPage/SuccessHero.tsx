export default function SuccessHero() {
  const img = `https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/blogsImages/Blogphoto1.jpg`;
  return (
    <section id="successHero">
      <div className="flex flex-col lg:flex-row">
        {/* img */}
        <div className="w-[100%] relative lg:order-2 lg:w-[44.18%]">
          <img src={img} alt="" className="w-full relative z-10" />
          <img
            src={img}
            alt=""
            className="w-full absolute top-0 -left-3 scale-x-95 lg:scale-x-100 lg:scale-y-95 origin-top opacity-30"
          />
        </div>
        {/* context */}
        <div className="p-[30px] space-y-[20px] lg:space-y-[1.250vw] lg:order-1 lg:w-[55.82%] lg:pt-[20vw] lg:pl-[6.6vw]">
          <div className="leading-[1] uppercase text-center lg:text-start lg:space-x-[6vw]">
            <h1 className="text-[46px] text-[#949494] lg:text-[4.375vw]">
              What everyone{" "}
            </h1>
            <p className="text-[65.69px] font-Black leading-[0.88] text-heavyBlue lg:text-[6.375vw]">
              is saying
            </p>
          </div>
          {/* para */}
          <p className="py-[50px] px-[30px] border-l-[10px] border-heavyBlue text-center text-[30px] leading-[1] text-[#333333] font-Bold lg:text-start lg:border-l-[0.625vw] lg:py-[4.875vw] lg:px-[2.438vw] lg:text-[1.875vw]">
            Your success. Amplified.
          </p>
        </div>
      </div>
    </section>
  );
}
