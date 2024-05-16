export default function AboutSec2SM() {
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
    <section id="about2" className="lg:hidden">
      <div className="flex flex-col items-center justify-center space-y-24 pt-10 overflow-hidden about-Sec2-img">
        {/* context */}
        <div className="px-[30px] space-y-6">
          <h1 className="text-[28px] sm:text-[35px] md:text-[42px] font-Black text-darkBlue">
            Content Creator
          </h1>
          <div className="text-[16px] leading-[1.9] tracking-[0.02em] space-y-4">
            {para.map((el, index) => (
              <p key={index}>{el}</p>
            ))}
          </div>
        </div>
        {/* img */}
        <img
          src="https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/aboutImgSec2.png"
          alt=""
          className="h-[auto] hidden sm:block max-w-[420px]"
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
