import { Link } from "react-router-dom";
export default function NavDeskList1() {
  const context = [
    { text: "About", link: "/about" },
    { text: "Solutions", link: "/solutions" },
    { text: "Portfolio", link: "/portfolio" },
  ];
  return (
    <>
      <div className="flex items-center space-x-[4vh] xl:space-x-[6vh]">
        <Link to="/">
          <p className="font-Bold text-[5vh]  xl:text-[6vh] text-darkBlue">
            R.
          </p>
        </Link>
        <div className="flex items-center space-x-[1.5vh] font-Bold text-[1.6vh] xl:text-[2vh] uppercase ">
          {context.map((el, index) => (
            <div key={index} className="hover:text-heavyBlue duration-300">
              <Link to={el.link}>{el.text}</Link>
            </div>
          ))}
          <div className="relative group cursor-pointer hover:text-heavyBlue duration-300">
            <p>Media</p>
            <div
              className="absolute duration-300 text-[1.6vh]"
              //   h-0 overflow-hidden group-hover:h-full
            >
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
    </>
  );
}
