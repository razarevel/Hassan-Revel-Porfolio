import blogs from "../../../../../public/blogs";
export default function BlogSecGrid() {
  return (
    <>
      <div className="grid grid-cols-2 lg:flex gap-10 mt-[5vw] px-[16px] lg:p-0">
        {blogs.map(
          (el, index: any) =>
            index < 5 && (
              <div key={index} className="w-full space-y-4 cursor-pointer">
                <div className="w-full overflow-hidden rounded-lg">
                  <img
                    src={el.img}
                    alt=""
                    className="w-full hover:scale-105 duration-300"
                  />
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
}
