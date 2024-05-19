export default function SolHero() {
  const para = `I’m an AI Engineer. I make Machine learning and
    AI solutions for businesses, organizations,
    individuals and researchers.
    `;
  const img =
    "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/aboutImage/Hassan+Revel+about+page.jpg";
  return (
    <section id="solHero">
      <div className="flex flex-col space-y-14 lg:flex-row lg:justify-between">
        {/* img */}
        <div className="w-[100%] relative lg:order-2 lg:w-[44.18%]">
          <img src={img} alt="" className="w-full relative z-10" />
          <img
            src={img}
            alt=""
            className="w-full absolute top-0 -left-3 scale-x-95 lg:scale-x-100 lg:scale-y-95 origin-top opacity-30"
          />
        </div>
        {/* context */}
        <div className="px-[26px] space-y-10 lg:space-y-[1vw] lg:order-1 lg:w-[55.82%] lg:pt-[13vw] lg:pl-[6.6vw]">
          {/* heading */}
          <h1 className="text-[#949494] text-[48px] lg:text-[4.375vw]">
            SOLUTIONS
          </h1>
          {/* para */}
          <div className="space-y-4 border-l-[10px] border-heavyBlue px-[30px] py-[1vh]">
            {/* heading 1 */}
            <div className=" text-[32px] lg:text-[2em] font-Bold text-Dark space-y-3">
              <p>Hassan Revel Solutions</p>
            </div>

            <p className="lg:text-[1vw] text-[16px] lg:max-w-[42vw]">{para}</p>
            <p className="text-[16px] font-Bold text-Dark lg:text-[1.5em]">
              Simpler, Easier and Faster, at all cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
