import { Link } from "react-router-dom";
import Logo from "../../../Logo";
import useZustand from "../../../../utilities/zustand";
export default function NavDeskList1() {
  const context = [
    { text: "About", link: "/about" },
    { text: "Solutions", link: "/solutions" },
    { text: "Blogs", link: "/blogs" },
  ];
  const { setSubsFixForm } = useZustand();
  return (
    <div
      className="w-[75%] flex items-center  nav-bg"
      onClick={() => setSubsFixForm(false)}
    >
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

          <div className="hover:text-heavyBlue duration-300">
            <Link to={"/contact"}>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
