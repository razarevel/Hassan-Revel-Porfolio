import { Link } from "react-router-dom";
import Logo from "../../../Logo";

export default function AbsoluteNav() {
  const context = [
    { text: "About", link: "/about" },
    { text: "Solutions", link: "/solutions" },
    { text: "Portfolio", link: "/portfolio" },
  ];
  const contextImg = [
    {
      img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/instagram.png",
      link: "https://www.instagram.com/hassanrevela",
    },
    {
      img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/youtube.png",
      link: "https://www.youtube.com/@hassanrevel",
    },
    {
      img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/facebook.png",
      link: "https://www.facebook.com/hassanrevela",
    },
    {
      img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/linkedin.png",
      link: "https://linkedin.com/in/hassanrevel",
    },
    {
      img: "https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/twitter.png",
      link: "https://twitter.com/hassanrevel",
    },
  ];
  return (
    <div className="hidden lg:flex absolute w-full top-0 left-0 justify-between h-[8vw] ">
      <div className="navbar-img lg:px-[9vh] flex items-center w-[55.5vw] 2xl:w-[60vw]">
        <div className="flex items-center space-x-[4vh] xl:space-x-[6vh] relative z-20">
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
        <div className="absolute w-full h-full left-0 top-0 bg-no-repeat">
          <div className="absolute bg-white w-full h-full opacity-90"></div>
        </div>
      </div>

      {/* asdad */}
      <div className="flex items-center space-x-[2vh] relative z-20  text-white lg:px-[9vh] ">
        <div className="flex items-center space-x-[1.5vh]">
          {contextImg.map((el, index) => (
            <div key={index}>
              <Link to={el.link} target="_blank">
                <img
                  src={el.img}
                  alt=""
                  className="w-[2.5vh] hover:opacity-60 duration-300"
                />
              </Link>
            </div>
          ))}
        </div>
        {/* border */}
        <div className=" h-[4vh] w-[0.1vh] bg-slate-100"></div>
        {/* contact btn */}
        <div>
          <Link to={"/contact"}>
            <p className="font-Bold text-[1.6vh] xl:text-[2vh] uppercase hover:opacity-60 duration-300">
              CONTACT
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
