export default function AboutHeroSm() {
  const para = `I’m an AI Engineer. I make AI solutions for my clients. My client involves businesses, individuals, researchers and organizations. The solutions I make are Generative AI, AI applications, Prompt Engineering, Discriminative AI, and building deploying Machine learning models to Sagemaker. Additionally I’m working on my two software products, a no code chatbot development platform AquaChat and an AI gaming character development platform Phantom. There’s nothing more than I love making fun and engaging content for all kinds of people, news, vlogs, blogs and social media post.`;
  return (
    <section
      id="hero"
      className="flex flex-col lg:flex-row justify-between space-y-14 mb-32 lg:hidden"
    >
      <div className="w-full">
        <img
          src="https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/Hassan+Revel+about+page.jpg"
          alt=""
          className="w-full"
        />
      </div>

      <div className="px-[26px] space-y-10">
        {/* heading */}
        <div className="space-y-[-20px] space-x-10">
          <h1 className="text-[#949494] text-[48px]">ABOUT</h1>
          <p className="font-Black text-[48px] sm:text-[65px] text-heavyBlue">
            HASSAN
          </p>
        </div>
        {/* para */}
        <div className="space-y-4 border-l-[10px] border-heavyBlue px-[30px] py-[1vh]">
          {/* heading 1 */}
          <div className="text-nowrap text-[32px] font-Bold text-Dark space-y-3 md:hidden">
            <p>About Hassan </p>
            <p>Revel</p>
          </div>
          {/* heading 2 */}
          <div className="text-nowrap text-[32px] font-Bold text-Dark hidden md:block">
            <p>About Hassan Revel </p>
          </div>
          <p>{para}</p>
          <p className="text-[16px] font-Bold text-Dark ">
            Simpler, Easier and Faster, at all cost.
          </p>
        </div>
      </div>
    </section>
  );
}
