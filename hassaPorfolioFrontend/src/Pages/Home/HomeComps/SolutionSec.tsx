import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import solutions from "../../../../public/solutions";
export default function SolutionSec() {
  return (
    <section id="solutionSec">
      <div className="px-[30px] lg:px-[6.6vw] my-[56px] lg:my-[6.6vw] space-y-[34px] lg:space-y-[5.6vw]">
        {/* headig */}
        <h1 className="text-[44px] lg:text-[5vw] font-Black text-heavyBlue">
          Solution
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-[5vw]">
          {solutions.map(
            (el, index) =>
              index < 6 && (
                <motion.div
                  key={index}
                  className="space-y-5 group  cursor-pointer rounded-lg overflow-hidden"
                >
                  <div className="overflow-hidden">
                    <img
                      src={el.img}
                      alt=""
                      className="group-hover:scale-105 duration-300"
                    />
                  </div>
                  <h1 className="font-Bold text-[24px] lg:text-[2vw] text-darkBlue">
                    {el.name}
                  </h1>
                </motion.div>
              )
          )}
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
