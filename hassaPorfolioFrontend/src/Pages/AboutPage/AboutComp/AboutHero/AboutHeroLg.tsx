export default function AboutHeroLg() {
  const img =
    "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/Hassan+Revel+about+page.jpg";
  const para = `I’m an AI Engineer. I make AI solutions for my clients. My client involves businesses, individuals, researchers and organizations. The solutions I make are Generative AI, AI applications, Prompt Engineering, Discriminative AI, and building deploying Machine learning models to Sagemaker. Additionally I’m working on my two software products, a no code chatbot development platform AquaChat and an AI gaming character development platform Phantom. There’s nothing more than I love making fun and engaging content for all kinds of people, news, vlogs, blogs and social media post.`;
  return (
    <section
      id="heroLg"
      className="lg:flex hidden justify-between items-end space-x-20"
    >
      {/* context */}
      <div className="pl-[6.6vw] w-[55.18%]  h-full 2xl:-translate-y-24">
        {/* heading */}
        <div className="space-y-[-20px] space-x-10">
          <h1 className="text-[#949494] text-[4.375vw]">ABOUT</h1>
          <p className="font-Black text-[6.375vw] text-heavyBlue">HASSAN</p>
        </div>
        {/* para */}
        <div className="flex relative space-x-[2vw] items-center">
          <div className=" h-[70%] border-l-[10px] border-darkBlue absolute"></div>
          {/* para */}
          <div className="space-y-4">
            {/* heading 1 */}
            <div className="text-nowrap text-[2em] font-Bold text-Dark space-y-3 md:hidden">
              <p>About Hassan </p>
              <p>Revel</p>
            </div>
            {/* heading 2 */}
            <div className="text-nowrap text-[32px] font-Bold text-Dark hidden md:block">
              <p>About Hassan Revel </p>
            </div>
            <p className="max-w-[90%] text-[16px] lg:text-[1vw] leading-[1.9] tracking-[0.02em]">
              {para}
            </p>
            <p className="text-[1.5em] font-Bold text-Dark ">
              Simpler, Easier and Faster, at all cost.
            </p>
          </div>
        </div>
      </div>
      {/* img */}
      <div className="xl:max-w-[43%] w-[100%] relative">
        <img src={img} alt="" className="w-full relative z-10" />
        <div className="absolute w-[90%]  -left-5 top-0">
          <div className="absolute w-full h-full bg-white opacity-30"></div>
          <img src={img} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
}
