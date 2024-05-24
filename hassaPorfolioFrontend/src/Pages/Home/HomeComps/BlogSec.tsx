import { Link } from "react-router-dom";

export default function BlogSec() {
  const linkContext = [
    { text: "read blogs", link: "/blogs" },
    { text: "SUBSCRIBE", link: "#footer" },
  ];
  const text = `Look at the behind the scenes of my life in AI, AI Solutions and how I strive for
  success everyday.
  `;
  return (
    <section id="blogSec">
      <div className="px-[30px] lg:px-[6.6vw] my-[56px] lg:my-[6.6vw] space-y-[34px]">
        <h1 className="text-[44px] lg:text-[5vw] font-Black text-heavyBlue">
          Blogs
        </h1>
        <p className="text-[16px] leading-[2] lg:text-[1vw]">{text}</p>
        {/* btn */}
        <div className="flex space-x-4 lg:space-x-[2vw]">
          <div>
            <Link to={linkContext[0].link}>
              <div className="uppercase font-Bold text-heavyBlue hover:text-Dark duration-300 text-[16px] lg:text-[1vw]">
                {linkContext[0].text}
              </div>
            </Link>
          </div>
          <a href={linkContext[1].link}>
            <div className="uppercase font-Bold text-heavyBlue hover:text-Dark duration-300 text-[16px] lg:text-[1vw]">
              {linkContext[1].text}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
