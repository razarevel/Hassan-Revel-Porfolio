export default function AboutSectionSM() {
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
    <section id="aboutSec1 " className="about-sec1-img mt-24 lg:hidden">
      <div className="flex flex-col items-center justify-center px-[30px] space-y-20">
        {/* context */}
        <div className="w-full h-full space-y-10">
          <div className="text-[35px] md:text-[42px] lg:font-[5vw] font-Bold text-darkBlue -space-y-1.5">
            <h1>AI</h1>
            <h1>Engineer</h1>
          </div>
          <div className="space-y-4">
            {para.map((el, index) => (
              <p key={index}>{el}</p>
            ))}
          </div>
        </div>
        {/* img */}
        <img
          src="https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/Revel+png+1.png"
          alt=""
          className=" md:max-w-[420px]"
        />
      </div>
    </section>
  );
}
