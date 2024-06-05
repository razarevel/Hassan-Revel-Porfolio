import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
interface Solution {
  id: number;
  img: string;
  name: string;
}
export default function SolutionSec() {
  const [solution, setSolution] = useState<Solution[]>([]);
  useEffect(() => {
    axios
      .get("https://api.hassanrevel.com/api/solutions/?page=1")
      .then((res) => setSolution(res.data.results));
  });
  return (
    <section id="solutionSec">
      <div className="px-[30px] lg:px-[6.6vw] my-[56px] lg:my-[6.6vw] space-y-[34px] lg:space-y-[5.6vw]">
        {/* headig */}
        <h1 className="text-[44px] lg:text-[5vw] font-Black text-heavyBlue">
          Solution
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[5vw]">
          {solution.map((el: Solution, index) => (
            <div key={index} className="space-y-5">
              <img src={el.img} alt="" />
              <h1 className="font-Bold text-[24px] lg:text-[2vw] text-darkBlue">
                {el.name}
              </h1>
            </div>
          ))}
        </div>
        {/* gird */}
        <div className="w-full flex justify-end items-end max-w-[95vw]">
          <Link to={"/solutions"}>
            <div className="review-border duration-300 text-heavyBlue hover:bg-heavyBlue hover:text-white font-SemiBold uppercase text-[14px] py-[22px] text-center relative z-20 w-[220px] h-[58px] bg-transparent flex items-center justify-center cursor-pointer">
              View more
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
