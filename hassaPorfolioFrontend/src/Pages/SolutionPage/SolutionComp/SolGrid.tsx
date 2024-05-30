import axios from "axios";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

interface Solution {
  id: number;
  img: string;
  name: string;
}

export default function SolGrid() {
  const [data, setData] = useState<Solution[]>([]);
  const [count, setCount] = useState<number>(2);
  const [maxCount, SetMaxCounts] = useState<number>(0);
  const url = "http://127.0.0.1:8000/api/solutions/?page=" + count.toString();
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.results);
      calculateTotalPages(res.data.count, 6);
    });
  }, [count]);
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
  return (
    <section
      id="solGrid"
      className="px-[16px] md:px-[32px] lg:px-[6.6vw] my-[56px] lg:my-[6.6vw]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[2.5vw]">
        {data.map((el, index: number) => (
          <div key={index} className="space-y-5">
            <img src={el.img} alt="" />
            <h1 className="font-Bold text-[24px] lg:text-[2vw] text-darkBlue">
              {el.name}
            </h1>
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
  );
}
