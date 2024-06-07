import axios from "axios";
import { useState, useEffect } from "react";
import useZustand from "../../../../utilities/zustand";
import { useQuery } from "@tanstack/react-query";

interface Blogs {
  id: number;
  img: string;
  name: string;
  link: string;
  date: string;
}
export default function BlogSecGrid() {
  // const { results } = useApiCall("blogs", 1);
  const [blogs, setBlogs] = useState<Blogs[]>([]);
  const { apiUrl } = useZustand();
  const url = apiUrl + "blogs/?page=1";
  const { isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => {
      axios
        .get(url)
        .then((res) => setBlogs(res.data.results))
        .catch((err) => console.log(err));
    },
  });
  return (
    <>
      <div className="grid grid-cols-2 lg:flex gap-10 mt-[5vw] px-[16px] lg:p-0">
        {blogs.map((el: Blogs, index: any) => (
          <div key={index} className="w-full space-y-4 cursor-pointer">
            <div className="w-full overflow-hidden rounded-lg">
              <img
                src={el.img}
                alt=""
                className="w-full hover:scale-105 duration-300"
              />
            </div>
            <div>
              {/* <h1 className="text-[24px] leading-[1.31] tracking-normal lg:text-[1.8vw] font-Bold text-heavyBlue">
                {el.name}
              </h1> */}
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
