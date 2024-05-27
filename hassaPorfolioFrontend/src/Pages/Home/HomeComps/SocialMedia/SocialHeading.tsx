export default function SocialHeading() {
  const para = `If there’s anything in the world that I love the most is making AI that can change the world forever, and I’d love to share my creation with you and connect with those who’re interested in hiring, learning and seeing my creation.`;
  return (
    <>
      <div className="w-full text-center space-y-[37px] ">
        <h1 className="text-[48px] font-Bold leading-[1.1] lg:text-[7.063vw]">
          Engage <br /> with me <br /> 24/7
        </h1>
        <p className="text-[18px] px-[37px] leading-[1.8] text-[#ababab] lg:max-w-[55.93vw] mx-auto lg:text-[1.125vw] lg:my-[3.438vw]">
          {para}
        </p>
      </div>
    </>
  );
}
