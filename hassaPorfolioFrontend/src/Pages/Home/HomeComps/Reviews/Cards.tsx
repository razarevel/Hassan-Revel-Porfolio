interface Props {
  name: string;
  img: string;
  review: string;
  title: string;
}
export default function Cards({ name, img, review, title }: Props) {
  return (
    <>
      <div className="max-w-[305px] md:max-w-[305px] lg:max-w-[100%] mx-auto relative flex flex-col   bg-white review-card w-full">
        {/* img */}
        <div className="lg:h-[15.313vw] w-full h-[197px] relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full reviews-bg"
            style={{
              background: `url("${img}")`,
            }}
          ></div>
          <img src={img} alt="" className="h-full mx-auto z-10 relative" />
        </div>
        <div className="pb-[50px] pt-[39px] px-[10px] text-[16px] leading-[1.8] lg:text-[1vw]">
          <p className=" w-full text-center ">{review}</p>
          <div className="w-full text-center mt-[53px] space-y-[8px]">
            <h1 className="text-[20px] font-Bold text-heavyBlue">{name}</h1>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </>
  );
}
