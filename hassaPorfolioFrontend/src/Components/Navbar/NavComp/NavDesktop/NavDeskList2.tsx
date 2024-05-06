import { Link } from "react-router-dom";
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
  return (
    <>
      <div className="flex items-center space-x-[2vh] relative z-20 bg-slate-300 text-white">
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
        <div>
          <Link to={"/contact"}>
            <p className="font-Bold text-[1.6vh] xl:text-[2vh] uppercase hover:opacity-60 duration-300">
              CONTACT
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
