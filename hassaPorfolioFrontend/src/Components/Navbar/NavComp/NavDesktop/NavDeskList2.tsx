import { Link } from "react-router-dom";
import useZustand from "../../../../utilities/zustand";
export default function NavDeskList2() {
  const context = [
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
  const { subsFixForms, setSubsFixForm } = useZustand();

  return (
    <div
      className="h-full flex items-center justify-center right-0 top-0 absolute"
      style={{
        background: `url("https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/cmh-right-bg.jpg")`,
      }}
      onClick={() => subsFixForms && setSubsFixForm(false)}
    >
      <div className="flex items-center space-x-[2vh] relative z-20  text-white lg:px-[9vh] ">
        <div className="flex items-center space-x-[1.5vh]">
          {context.map((el, index) => (
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
        <div className="relative">
          <p
            className="font-Bold text-[1.6vh] xl:text-[2vh] uppercase hover:opacity-60 duration-300 cursor-pointer"
            onClick={() => setSubsFixForm(!subsFixForms)}
          >
            SUBSCRIBE
          </p>
        </div>
      </div>
    </div>
  );
}
