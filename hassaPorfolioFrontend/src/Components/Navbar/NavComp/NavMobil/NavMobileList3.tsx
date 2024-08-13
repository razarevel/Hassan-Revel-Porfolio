import { Link } from "react-router-dom";
import Logo from "../../../Logo";
import { ImCross } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";
interface Props {
  show: boolean;
  setShow: () => void;
}
export default function NavMobileList3({ show, setShow }: Props) {
  const context = [
    { text: "About", link: "/about" },
    { text: "Solutions", link: "/solutions" },
    { text: "Blogs", link: "/blogs" },
    {
      text: "Vlogs",
      link: "https://www.youtube.com/@hassanrevel",
      target: "_blank",
    },
    { text: "Contact", link: "/contact" },
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
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute right-0 top-0 z-30  w-[280px] space-y-[4vh]"
          style={{
            background: `url("https://hassan-revel-profolio.s3.eu-west-2.amazonaws.com/src/assets/cmh-right-bg.jpg")`,
          }}
          initial={{ y: -140, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -140, opacity: 0 }}
          transition={{
            ease: "linear",
          }}
        >
          {/* logo */}
          <div className="flex items-center justify-between relative px-[4vh]">
            <div onClick={setShow}>
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div
              className="flex items-center justify-center w-[25%] h-full absolute right-0 top-0 text-white"
              style={{
                background: `url("https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/cmh-right-bg.jpg")`,
              }}
              onClick={setShow}
            >
              <ImCross />
            </div>
          </div>
          {/* list */}
          <div className="font-Bold text-[2.2vh] space-y-[1vh] uppercase px-[4vh]">
            {context.map((el, index) => (
              <div key={index} className="hover:text-heavyBlue duration-300">
                <Link to={el.link} target={el.target} className="text-white">
                  {el.text}
                </Link>
              </div>
            ))}
          </div>
          {/* Contact */}
          <div
            className="flex items-center justify-center space-x-[1.5vh] h-[10vh]"
            style={{
              background: `url("https://ryanserhant.com/wp-content/themes/ryanserhant.com/assets/images/cmh-right-bg.jpg")`,
            }}
          >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
