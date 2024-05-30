import BlogsHeading from "./BlogsHeading";
interface Blogs {
  id: number;
  img: string;
  name: string;
  link: string;
  date: string;
}
export default function BlogsGrid() {
  return (
    <section id="blogsGrid">
      <div className="px-[16px] sm:px-[30px] lg:px-[5.125vw]">
        {/* heading */}
        <BlogsHeading />
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[5vw]">
          {/* {blogs.map((el: Blogs, index: any) => (
            <div key={index} className="w-full space-y-4">
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src={el.img}
                  alt=""
                  className="w-full hover:scale-105 duration-300"
                />
              </div>
              <div>
                <h1 className="text-[24px] leading-[1.31] tracking-normal lg:text-[1.8vw] font-Bold text-heavyBlue">
                  {el.name}
                </h1>
                <p className="text-[10px] lg:text-[1vw] opacity-70">
                  {el.date}
                </p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}
