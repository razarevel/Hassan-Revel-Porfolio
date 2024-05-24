export default function SolutionSec() {
  const context = {
    img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/solutionImg/AI+applications.jpg",
    text: "AI applications",
  };
  return (
    <section id="solutionSec">
      <div className="px-[30px] lg:px-[6.6vw] my-[56px] lg:my-[6.6vw] space-y-[34px] lg:space-y-[5.6vw]">
        {/* headig */}
        <h1 className="text-[44px] lg:text-[5vw] font-Black text-heavyBlue">
          Solution
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[5vw]">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-full space-y-4">
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src={context.img}
                  alt=""
                  className="w-full hover:scale-105 duration-300"
                />
              </div>
              <div>
                <h1 className="text-[24px] leading-[1.31] tracking-normal lg:text-[1.8vw] font-Bold text-heavyBlue px-[10px] lg:px-[1vw]">
                  {context.text}
                </h1>
              </div>
            </div>
          ))}
        </div>
        {/* gird */}
      </div>
    </section>
  );
}
