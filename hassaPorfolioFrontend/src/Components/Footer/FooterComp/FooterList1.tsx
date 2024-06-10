import { Link } from "react-router-dom";

export default function FooterList1() {
  const list1 = [
    { text: "About", link: "/about" },
    { text: "Solutions", link: "/solutions" },
    { text: "blogs", link: "/blogs" },
    { text: "Contact Me", link: "/contact" },
  ];
  return (
    <div className="mt-[87px] lg:mt-0">
      <h1 className="text-[25px] lg:text-[1.563vw] font-Bold mb-[35px] lg:mb-[2.125vw]">
        Explore
      </h1>
      <div className="flex">
        {/* list 1 */}
        <div className="text-[15px] lg:text-[1vw] font-Bold uppercase space-y-[1.66vw]">
          {list1.map((el, index) => (
            <div key={index} className="hover:opacity-70 duration-300">
              <Link to={el.link}>{el.text}</Link>
            </div>
          ))}
        </div>
        {/* list 2 */}
        {/* <div className="text-[15px] lg:text-[1vw] font-Bold  space-y-[1.688vw]">
          <p className="uppercase">
            <Link to="/blogs">Blogs</Link>
          </p>
        </div> */}
      </div>
    </div>
  );
}
