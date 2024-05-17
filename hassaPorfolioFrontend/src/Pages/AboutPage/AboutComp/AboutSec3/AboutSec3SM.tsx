export default function AboutSec3SM() {
  const para = [
    `I’m highly focused on building a community of people who are developers, learners, enthusiasts and who are there for just fine. So that we could share our experiences and learning to each other, and develop AI that’s highly profitable and for the development of humanity.
        `,
    `The purpose here is to provide everyone a platform, where they could share their struggles, help each other out and be aware of the latest trends and stay on top of them.
        `,
    `Feeding them with knowledge they can harvest to build something awesome.`,
  ];
  const img =
    "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/abouttwo.png";
  return (
    <section id="aboutSec3" className="mt-10 lg:hidden">
      <div className="space-y-24">
        {/* context */}
        <div>
          <div className="px-[30px] space-y-6">
            <h1 className="text-[28px] sm:text-[35px] md:text-[42px] font-Black text-darkBlue">
              Community Leader
            </h1>
            <div className="text-[16px] leading-[1.9] tracking-[0.02em] space-y-4">
              {para.map((el, index) => (
                <p key={index}>{el}</p>
              ))}
            </div>
          </div>
        </div>
        {/* img */}
        <div className="relative flex justify-end pt-[20px] md:pt-[30px]">
          <img src={img} alt="Hasss Revel Sec 3 img" className="w-[95%] z-10" />
          <img
            src={img}
            alt="Hasss Revel Sec 3 img"
            className="absolute top-0 left-0 opacity-40 w-[95%]"
          />
        </div>
      </div>
    </section>
  );
}
