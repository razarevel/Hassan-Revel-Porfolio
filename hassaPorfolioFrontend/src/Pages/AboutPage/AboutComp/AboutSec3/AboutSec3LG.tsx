export default function AboutSec3LG() {
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
    <section
      id="aboutSec3"
      className=" hidden lg:block relative pr-[6vw] overflow-hidden pb-[6.8vw]"
    >
      <img
        src="https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/about/ip-about-sec3-overlay.jpg"
        alt=""
        className="absolute  top-0 right-0 w-[11.375vw] h-full"
      />
      <div className="flex  justify-between  z-10 bg-white relative pt-[6.8vw] xl:space-x-[2.2vw] xl:space-y-[2vw]">
        {/* img */}
        <div className="relative flex justify-end pt-[20px] md:pt-[30px] w-[50%]">
          <img src={img} alt="Hasss Revel Sec 3 img" className="w-[95%] z-10" />
          <img
            src={img}
            alt="Hasss Revel Sec 3 img"
            className="absolute top-0 left-0 opacity-40 w-[95%]"
          />
        </div>
        {/* context */}
        <div className="w-[50%]">
          <div className="px-[30px] space-y-6">
            <h1 className="text-[5.625vw] leading-[1.1] font-Black text-darkBlue">
              Community Leader
            </h1>
            <div className="text-[1vw] leading-[1.9] tracking-[0.02em] space-y-[2vw] max-w-[40.063vw]">
              {para.map((el, index) => (
                <p key={index}>{el}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
