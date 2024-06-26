import axios from "axios";
import { useState } from "react";
import useZustand from "../utilities/zustand";
import { useQuery } from "@tanstack/react-query";
interface Solution {
  id: number;
  img: string;
  name: string;
  date: string | undefined;
}
interface Blogs {
  id: number;
  img: string;
  name: string;
  link: string;
  date: string;
}
interface Props {
  api: string;
}
export default function PaginatedGrid({ api }: Props) {
  const { apiUrl } = useZustand();
  const [data, setData] = useState<Solution[] | Blogs[]>([]);
  const [count, setCount] = useState<number>(1);
  const [maxCount, SetMaxCounts] = useState<number>(0);
  const url = apiUrl + api.toString() + "/?page=" + count.toString();
  const { isLoading } = useQuery({
    queryKey: [api, url],
    queryFn: () =>
      axios.get(url).then((res) => {
        setData(res.data.results);
        calculateTotalPages(res.data.count, 6);
      }),
  });

  // for pagination number
  const calculateTotalPages = (
    totalResults: number,
    resultsPerPage: number
  ): void => {
    let totalPages: number = Math.floor(totalResults / resultsPerPage);
    if (totalResults % resultsPerPage !== 0) {
      totalPages++;
    }
    return SetMaxCounts(totalPages);
  };
  console.log(isLoading);
  return (
    <>
      <section
        id="solGrid"
        className="px-[16px] md:px-[32px] lg:px-[6.6vw] my-[56px] lg:my-[6.6vw]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[2.5vw]">
          {isLoading &&
            [...Array(6)].map((_, index) => (
              <div
                key={index}
                className="w-full  h-[300px] lg:h-[16vw] rounded-lg overflow-hidden relative card-is-loading "
              ></div>
            ))}
          {!isLoading &&
            data.map((el, index: number) => (
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
        {/* btn */}
        <div className="px-[16px] sm:px-[30px] lg:px-[5.125vw] my-[56px] flex items-center justify-between lg:max-w-[35vw] mx-auto ">
          {/* prev */}
          <div
            className={
              "border rounded-full w-[40px] h-[40px] flex items-center justify-center   relative duration-300 " +
              (count > 1
                ? " group hover:bg-heavyBlue cursor-pointer"
                : " opacity-70")
            }
            onClick={() => count > 1 && setCount(count - 1)}
          >
            <svg
              fill="#000000"
              className="w-7 group-hover:fill-white"
              viewBox="-8.5 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.094 15.938l7.688 7.688-3.719 3.563-11.063-11.063 11.313-11.344 3.531 3.5z"></path>
            </svg>
          </div>
          {[...Array(maxCount)].map((_, index) => (
            <div
              key={index}
              className={
                " rounded-full w-[40px] h-[40px] flex items-center justify-center hover:bg-heavyBlue hover:text-white cursor-pointer " +
                (index === count - 1 && " bg-heavyBlue text-white")
              }
              onClick={() => setCount(index + 1)}
            >
              <p>{index + 1}</p>
            </div>
          ))}
          {/* next */}
          <div
            className={
              "border rounded-full w-[40px] h-[40px] flex items-center justify-center rotate-180    relative  " +
              (count < maxCount
                ? " group hover:bg-heavyBlue cursor-pointer"
                : " opacity-70")
            }
            onClick={() => count < maxCount && setCount(count + 1)}
          >
            <svg
              fill="#000000"
              className="w-7 group-hover:fill-white"
              viewBox="-8.5 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.094 15.938l7.688 7.688-3.719 3.563-11.063-11.063 11.313-11.344 3.531 3.5z"></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
