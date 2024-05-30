import axios from "axios";
import { useEffect, useState } from "react";

interface Solution {
  id: number;
  img: string;
  name: string;
}

export default function SolGrid() {
  const [data, setData] = useState<Solution[]>([]);
  const count = 1;
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
      <div className="flex items-center justify-center w-full mt-[36px]">
        {[...Array(maxCount)].map((_, index) => (
          <p key={index}>{index + 1}</p>
        ))}
      </div>
    </section>
  );
}
