import { Link } from "react-router-dom";

export default function FooterList2() {
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
    <div>
      <h1 className="text-[25px] lg:text-[1.563vw] font-Bold my-[35px] lg:my-0 lg:mb-[2.125vw]">
        Contact us
      </h1>
      <div className="space-y-3">
        {/* contact */}
        <div className="">
          <a href="tel: +923257450912">
            <div className="text-[16px] lg:text-[1vw] flex items-center space-x-4">
              <img
                src="https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/phone.png"
                alt=""
                className="w-[20px] lg:w-[25px] rotate-[270deg] duration-300 hover:opacity-70"
              />
              <p className="duration-300 hover:opacity-70">+923257450912</p>
            </div>
          </a>
        </div>
        <div>
          <a href="mailto: hassanrevel@hotmail.com">
            <div className="text-[16px] lg:text-[1vw] flex items-center space-x-4 ">
              <img
                src="https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/icons/envelope.png"
                alt=""
                className="w-[20px] lg:w-[25px] duration-300 hover:opacity-70"
              />
              <p className="duration-300 hover:opacity-70">
                hassan@hassanrevel.com
              </p>
            </div>
          </a>
        </div>
        {/* icons */}
        <div className="flex items-center  space-x-3    ">
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
      </div>
    </div>
  );
}
