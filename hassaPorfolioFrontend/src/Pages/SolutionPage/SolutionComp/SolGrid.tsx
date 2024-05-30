import axios from "axios";
import { useEffect, useState } from "react";

interface Solution {
  id: number;
  img: string;
  name: string;
}

export default function SolGrid() {
  const [data, setData] = useState<Solution[]>([]);
  const num = 1;
  const page = num.toString();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/solutions/?page=1`)
      .then((res) => console.log(res.data));
  });
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
    </section>
  );
}
