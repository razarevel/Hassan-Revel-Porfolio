import { Link } from "react-router-dom";
import Logo from "../../../Logo";
export default function NavDeskList1() {
  const context = [
    { text: "About", link: "/about" },
    { text: "Solutions", link: "/solutions" },
    { text: "Portfolio", link: "/portfolio" },
  ];
  return (
    <div className="w-[75%] flex items-center  nav-bg">
      <div className="flex items-center space-x-[4vh] xl:space-x-[6vh] lg:px-[9vh]">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex items-center space-x-[1.5vh] font-Bold text-[1.6vh] xl:text-[2vh] uppercase ">
          {context.map((el, index) => (
            <div key={index} className="hover:text-heavyBlue duration-300">
              <Link to={el.link}>{el.text}</Link>
            </div>
          ))}
          <div className="relative group cursor-pointer hover:text-heavyBlue duration-300">
            <p>Media</p>
            <div className="absolute duration-300 flex items-center text-[1.6vh] space-x-4 h-0 overflow-hidden group-hover:h-[8vh] nav-bg">
              {/* border */}
              <div className="w-0.5 h-[10vh] bg-heavyBlue"></div>
              {/* context */}
              <div className="space-y-2 py-10 pr-4">
                <div>
                  <Link to="/blogs">
                    <p>Blogs</p>
                  </Link>
                </div>
                <div>
                  <Link to="/vlogs">
                    <p>VLOGS</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
