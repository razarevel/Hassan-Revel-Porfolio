export default function Cards() {
  const para = `"Hassan has a strong understanding of Machine Learning,
    particularly his problem-solving skills. He was very helpful throughout the
    project and assisted in developing my project for Diabetic Retinopathy
    detection using SSL. I highly recommend him for any
    machine/deep learning tasks."`;
  const about = `Researcher`;
  const name = `Rashid Ali`;
  return (
    <>
      <div className="max-w-[305px] md:max-w-[305px] lg:max-w-[100%] mx-auto relative flex flex-col items-center justify-center bg-white review-card">
        {/* img */}
        <div className="lg:h-[15.313vw] w-full h-[197px] relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full reviews-bg"
            style={{
              background: `url("https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/reviews/Rashid+Ali.jpg")`,
            }}
          ></div>
          <img
            src="https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/reviews/Rashid+Ali.jpg"
            alt=""
            className="h-full mx-auto z-10 relative"
          />
        </div>
        <div className="pb-[50px] pt-[39px] px-[10px] text-[16px] leading-[1.8] lg:text-[1vw]">
          <p className=" w-full text-center ">{para}</p>
          <div className="w-full text-center mt-[53px] space-y-[8px]">
            <h1 className="text-[20px] font-Bold text-heavyBlue">{name}</h1>
            <p>{about}</p>
          </div>
        </div>
      </div>
    </>
  );
}
