export default function BlogsHero() {
  const para = `I give a funny, inspirational, and behind-the-scenes look into my entire day from early morning to late night, juggling work and personal life as an AI Engineer creating innovative solutions for my clients`;
  return (
    <section id="hero">
      <div className="">
        <img
          src="https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/blogsImages/Blogphoto1.png"
          alt=""
          className="relative"
        />
        {/* context */}
        <div className="pt-[82px] px-[30px] pb-[50px]">
          <h1 className="uppercase text-[60px] font-Black leading-[1] text-darkBlue">
            Blog
          </h1>
          <div>
            {/* border */}
            <div></div>
            {/* para */}
            <div className="border-l-[10px] border-darkBlue py-[59px] pl-[33px]">
              <h1 className="text-[2em] font-Bold text-darkBlue">
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
