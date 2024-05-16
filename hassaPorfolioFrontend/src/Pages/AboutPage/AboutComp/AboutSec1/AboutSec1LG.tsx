export default function AboutSectionLG() {
  const para = [
    `I used to spend all my time watching anime, playing games
        and Basketball, as a typical highschool student. Somehow I
        found my way into programming and I started to really like. I
        picked AI cause it was according to my taste`,
    `On January 2023, I started my career in AI as a freelancer. I
        studied Data Science from Data Camp, then I specialize in
        making Machine learning and AI solutions through
        lazypgrogramer Inc. I’m activally working on Generative AI
        as it is the latest market trend. My main enthusiasm has
        always Artificial General Intelligence (AGI) which is the
        upcoming.
        `,
    `As of this point I make AI solutions for my clients tailored to
        their needs and business requirements. I’m working on my
        two AI Software products as well, Aquachat a no code
        chatbot development software and Phantom a no code AI
        gaming character development software. And I’m attached
        to ITech Agency.`,
    `“My main moto has always been is to keep things Simpler,
        Easier and Faster”
        `,
  ];
  return (
    <section id="aboutSec1 " className="about-sec1-img mt-24 hidden lg:block">
      <div className="flex items-center justify-between px-[6.8vw] ">
        <div className="min-h-[495px] xl:min-h-[697px] w-[35.56%]  flex items-end">
          <img
            src="https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/Revel+png+1.png"
            alt=""
            className="w-[70%] xl:w-[65%]"
          />
        </div>
        {/* context */}
        <div className="">
          <div className="text-[5vw] font-Black leading-[1.1] text-darkBlue">
            <h1>AI</h1>
            <h1>Engineer</h1>
          </div>
          <div className="space-y-4 max-w-[50.125vw] pt-[3.063vw] text-[16px] lg:text-[1vw] leading-[1.9] tracking-[0.02em]">
            {para.map((el, index) => (
              <p key={index}>{el}</p>
            ))}
          </div>
        </div>
        {/* img */}
      </div>
    </section>
  );
}
