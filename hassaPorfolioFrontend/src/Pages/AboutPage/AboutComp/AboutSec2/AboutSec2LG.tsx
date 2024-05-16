export default function AboutSec2LG() {
  const para = [
    `Learning should be fun. AI has started
        to become the hottest topic in
        everyone’s lives due to the recent
        development of Generative from
        companies such openai, Google,
        Stable diffusions and many other
        startups`,
    `Thereby on my channels I tend to talk
        about AI in most intuitive and humanly
        fashion. Learning should be fun. And I
        do these for all kinds of people,
        particularly for entertainment and
        education purposes.`,
    `I tend to make fun videos of AI where I
        play around with different AI tools and
        models and see they behave in
        particular situation. I try to teach some
        of the tools and methodologies to use
        AI for your own particular use cases.
        And I intend to most latest news and
        updates of AI.
        `,
  ];
  return (
    <section
      id="about2"
      className="hidden lg:flex justify-end pt-[8.313vw] relative"
    >
      <img
        src="https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/about/ip-about-sec3-overlay.jpg"
        alt=""
        className="absolute left-0 top-0 h-full -z-10"
      />
      <div className="flex justify-between  overflow-hidden lg:overflow-visible about-Sec2-img max-w-[97.18%] lg:space-x-24">
        {/* context */}
        <div className="px-[30px] lg:px-0 lg:pt-[4.875vw] lg:pl-[8vw] space-y-6">
          <h1 className="text-[28px] sm:text-[35px] md:text-[42px] lg:text-[4.4vw]  font-Black text-darkBlue ">
            Content Creator
          </h1>
          <div className="text-[16px] lg:text-[1vw] leading-[1.9] tracking-[0.02em] space-y-4">
            {para.map((el, index) => (
              <p key={index}>{el}</p>
            ))}
          </div>
        </div>
        {/* img */}
        <img
          src="https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/aboutImgSec2.png"
          alt=""
          className="img-sec2-h hidden sm:block lg:w-[30%] xl:w-[33%] 2xl:w-[37%]"
        />
        <img
          src="https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/aboutImgSec2Croped.png"
          alt=""
          className="h-[auto] sm:hidden "
        />
      </div>
    </section>
  );
}
