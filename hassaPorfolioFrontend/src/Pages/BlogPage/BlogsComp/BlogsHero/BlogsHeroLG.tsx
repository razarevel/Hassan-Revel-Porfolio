export default function BlogsHeroLG() {
  const para = `I give a funny, inspirational, and behind-the-scenes look into my entire day from early morning to late night, juggling work and personal life as an AI Engineer creating innovative solutions for my clients`;
  const img =
    "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/blogsImages/Blogphoto1.jpg";
  return (
    <section id="hero" className="hidden lg:block ">
      <div className="relative flex justify-between">
        {/* context */}
        <div className="pl-[5.125vw] pt-[17.938vw] space-y-[5.313vw] w-[55.18%]">
          <h1 className="uppercase text-[6.375vw] font-Black leading-[1] text-darkBlue">
            Blog
          </h1>
          <div className="relative flex items-center pl-[3.375vw] pr-[7.875vw]">
            {/* border */}
            <div className="w-[0.625vw] absolute left-0  h-[13.938vw] bg-darkBlue"></div>
            {/* para */}
            <div className="">
              <h1 className="text-[2em] font-Bold text-Dark">
                Hassan Revel Blog
              </h1>
              <p className="text-[1vw] leading-[1.7]">{para}</p>
            </div>
          </div>
        </div>
        {/* img */}
        <div className="w-[44.81%] relative">
          <img
            src={img}
            alt=""
            className="w-[95%] absolute top-0 left-[-3%]  opacity-40"
          />
          <img src={img} alt="" className="relative w-full" />
        </div>
      </div>
    </section>
  );
}
