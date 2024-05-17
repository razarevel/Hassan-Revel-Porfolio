export default function AboutSec4() {
  const para = `I used to watch anime and play games all
    day long. From there I got into programming
    and 3D modeling, which lead to AI. Now I
    learn to fight which keeps me active all day
    long and do freelancing.`;
  return (
    <section id="aboutSec" className="mt-10">
      <div className="space-y-10 lg:space-y-0 lg:flex justify-between ">
        {/* context */}
        <div className="space-y-[2vw] px-[30px] lg:px-[6.8vw] lg:w-[50%] mt-[4vw]">
          <div className="text-[28px] sm:text-[35px] md:text-[42px] lg:text-[5.625vw] lg:leading-[1.1] font-Black text-darkBlue">
            <h1>Personal</h1>
            <h1>Life</h1>
          </div>
          <p className="text-[16px] lg:text-[1vw] leading-[1.9] tracking-[0.02em] lg:max-w-[42.08vw]">
            {para}
          </p>
        </div>
        {/* img */}
        <img
          src="https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/aboutFourth.png"
          alt=""
          className="lg:w-[50%]"
        />
      </div>
    </section>
  );
}
