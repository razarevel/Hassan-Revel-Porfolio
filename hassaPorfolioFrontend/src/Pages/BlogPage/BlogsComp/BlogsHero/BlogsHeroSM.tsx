export default function BlogsHeroSM() {
  const para = `I give a funny, inspirational, and behind-the-scenes look into my entire day from early morning to late night, juggling work and personal life as an AI Engineer creating innovative solutions for my clients`;
  const img =
    "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/blogsImages/Blogphoto1.png";
  return (
    <section id="hero" className="lg:hidden">
      <div className="relative flex flex-col justify-center">
        <img
          src={img}
          alt=""
          className="md:w-full absolute top-4 scale-x-[90%] opacity-40"
        />
        <img src={img} alt="" className="relative md:w-full" />
        {/* context */}
        <div className="pt-[82px] px-[30px] pb-[50px] space-y-[30px]">
          <h1 className="uppercase text-[60px] font-Black leading-[1] text-darkBlue">
            Blog
          </h1>
          <div>
            {/* border */}
            <div></div>
            {/* para */}
            <div className="border-l-[10px] border-darkBlue py-[59px] pl-[33px]">
              <h1 className="text-[2em] font-Bold text-Dark">
                Hassan Revel Blog
              </h1>
              <p className="text-[16px] leading-[36px]">{para}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
