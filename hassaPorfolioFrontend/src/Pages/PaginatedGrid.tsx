import solutions from "../../public/solutions";
import blogs from "../../public/blogs";
import { useEffect, useState } from "react";
interface Props {
  api: string;
}
export default function PaginatedGrid({ api }: Props) {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    return api === "solutions" ? setData(solutions) : setData(blogs);
  }, [api]);

  return (
    <>
      <section
        id="solGrid"
        className="px-[16px] md:px-[32px] lg:px-[6.6vw] my-[56px] lg:my-[6.6vw]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[2.5vw]">
          {data.map((el, index: number) => (
            <div key={index} className="w-full space-y-4">
              <div className="w-full overflow-hidden rounded-lg cursor-pointer group">
                <img
                  src={el.img}
                  alt=""
                  className="w-full group-hover:scale-105 duration-300"
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
          ))}
        </div>
      </section>
    </>
  );
}
