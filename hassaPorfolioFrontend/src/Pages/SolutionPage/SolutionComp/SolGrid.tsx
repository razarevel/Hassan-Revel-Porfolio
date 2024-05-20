export default function SolGrid() {
  const context = {
    img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/solutionImg/AI+applications.jpg",
    text: "AI applications",
  };
  return (
    <section
      id="solGrid"
      className="px-[16px] md:px-[32px] lg:px-[6.6vw] my-[56px] lg:my-[6.6vw]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[2.5vw]">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="space-y-5">
            <img src={context.img} alt="" />
            <h1 className="font-Bold text-[24px] lg:text-[2vw] text-darkBlue">
              {context.text}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}
