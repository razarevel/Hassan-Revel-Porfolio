export default function BlogSecGrid() {
  const blogContext = {
    heading: "Plants Species Classifier",
    // date: "May 17, 2024",
    img: "https://media.licdn.com/dms/image/D4D12AQGSdBWRB--xxA/article-cover_image-shrink_720_1280/0/1715884083235?e=1721260800&v=beta&t=hkd-kuTaKTRHubB6KeVdnGVWlYGdtVvbR8WOjYks4ds",
  };
  return (
    <>
      <div className="grid grid-cols-2 lg:flex gap-10 mt-[5vw] px-[16px] lg:p-0">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="w-full space-y-4 cursor-pointer">
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src={blogContext.img}
                alt=""
                className="w-full hover:scale-105 duration-300"
              />
            </div>
            <div>
              <h1 className="text-[24px] leading-[1.31] tracking-normal lg:text-[1.8vw] font-Bold text-heavyBlue">
                {blogContext.heading}
              </h1>
              {/* <p className="text-[10px] lg:text-[1vw] opacity-70">
                {blogContext.date}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
