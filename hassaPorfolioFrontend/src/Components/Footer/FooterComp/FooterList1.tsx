import { Link } from "react-router-dom";

export default function FooterList1() {
  const list1 = [
    { text: "About", link: "/about" },
    { text: "Solutions", link: "/solutions" },
    { text: "Portfolio", link: "/portfolio" },
    { text: "Contact Me", link: "/contact" },
  ];
  return (
    <div className="mt-[87px] lg:mt-0">
      <h1 className="text-[25px] lg:text-[1.563vw] font-Bold mb-[35px] lg:mb-[2.125vw]">
        Explore
      </h1>
      <div className="flex space-x-[5.125vw]">
        {/* list 1 */}
        <div className="text-[15px] lg:text-[1vw] font-Bold uppercase space-y-[1.66vw]">
          {list1.map((el, index) => (
            <div key={index}>
              <Link to={el.link}>{el.text}</Link>
            </div>
          ))}
        </div>
        {/* list 2 */}
        <div className="text-[15px] lg:text-[1vw] font-Bold  space-y-[1.688vw]">
          <p className="uppercase">Resources</p>
          <p className="font-Regular lg:text-[.96vw]">
            <Link to="/blogs">Blogs</Link>
          </p>
          <p className="font-Regular lg:text-[.96vw]">
            <Link to="/vlogs">Vlogs</Link>
          </p>
          <p className="uppercase">Newsletters</p>
        </div>
      </div>
    </div>
  );
}
