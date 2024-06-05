import { useCallback, useEffect, useState } from "react";
import ContactImage from "./ContactImage";
import countries from "./countries";
import FormHeading from "./FormHeading";
interface Countries {
  name: string;
  code: string;
  emoji: string;
  unicode: string;
  image: string;
  dial_code: string;
}
export default function ContactForm() {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState<number>(0);
  const [flags, setFlags] = useState<Countries[]>(countries);

  const filterCountries = (letter: string) => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().startsWith(letter.toLowerCase())
    );
    setFlags([...filtered, ...countries]);
  };

  const keyCapture:any = useCallback(
    (event: React.KeyboardEvent) => {
      const keyPressed = event.key.toLocaleLowerCase();
      if (/^[a-z]$/.test(keyPressed)) {
        return filterCountries(keyPressed);
      }
      return;
    },
    [show]
  );
  useEffect(() => {
    if (show === true) {
      document.addEventListener("keydown", keyCapture, false);
      return () => {
        document.removeEventListener("keydown", keyCapture, false);
      };
    }
    return;
  }, [keyCapture, show]);
  console.log(show);
  return (
    <div
      className="lg:flex justify-between mb-[56px] lg:mb-[12vw]"
      onClick={() => show && setShow(false)}
    >
      <ContactImage />
      <div className="px-[30px] py-[60px] lg:order-1 lg:w-[55.18%] lg:mt-[13vw] lg:p-0 lg:pr-[4vw] lg:pl-[5.125vw]">
        {/* heading */}
        <FormHeading />
        <form className="flex flex-col space-y-[10px] lg:space-y-0 mt-[1.2vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-[1.250vw] lg:pb-[1.250vw]">
            {/* first name */}
            <div className="">
              <input
                type="text"
                name=""
                id=""
                className="focus:outline-none border-[1px] border-[#bcbcbc] w-full h-[42px] text-[12px] px-[10px] text-[#333333] placeholder:text-[#333333] lg:h-[3.063vw] lg:px-[1.375vw] lg:text-[0.875vw]"
                placeholder="First Name"
              />
            </div>
            {/* last name */}
            <div>
              <input
                type="text"
                name=""
                id=""
                className="focus:outline-none border-[1px] border-[#bcbcbc] w-full h-[42px] text-[12px] px-[10px] text-[#333333] placeholder:text-[#333333] lg:h-[3.063vw] lg:px-[1.375vw] lg:text-[0.875vw]"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-[1.250vw] lg:pb-[1.250vw] ">
            {/* Email */}
            <div>
              <input
                type="email"
                name=""
                id=""
                className="focus:outline-none border-[1px] border-[#bcbcbc] w-full h-[42px] text-[12px] px-[10px] text-[#333333] placeholder:text-[#333333] lg:h-[3.063vw] lg:px-[1.375vw] lg:text-[0.875vw]"
                placeholder="Email"
              />
            </div>
            {/* Phone */}
            <div className="flex border-[1px] border-[#bcbcbc] w-full h-[42px] text-[12px] space-x-[10px] relative lg:text-[0.875vw] lg:h-[3.063vw] lg:px-[0.375vw]">
              {/* flags */}
              <div
                className="w-10 h-full cursor-pointer flex items-center "
                onClick={() => setShow(!show)}
              >
                <img src={flags[select].image} alt="" />
              </div>
              {show && (
                <div className="absolute w-[80%] h-[200px] top-[42px] lg:h-[12vw] lg:top-[3.063vw] left-0 overflow-y-scroll cursor-pointer">
                  {flags.map((el, index) => (
                    <div
                      className="flex items-center justify-between bg-white px-4"
                      key={index}
                      onClick={() => {
                        setSelect(index);
                        setShow(false);
                      }}
                    >
                      <p>{el.name}</p>
                      <img src={el.image} alt="" className="w-10 h-10" />
                    </div>
                  ))}
                </div>
              )}
              <input
                type="number"
                name=""
                id=""
                className="focus:outline-none  text-[#333333] placeholder:text-[#333333] remove-arrow w-full"
                placeholder="Phone"
              />
            </div>
          </div>
          {/* textarea */}
          <div>
            <textarea
              className="focus:outline-none border-[1px] border-[#bcbcbc] w-full text-[12px] px-[10px] text-[#333333] placeholder:text-[#333333] resize-none h-[80px] p-[10px] lg:p-0 lg:py-[1.125vw] lg:px-[1.375vw] lg:h-[7.438vw] lg:text-[0.875vw] lg:mb-[1.250vw]"
              placeholder="Your message"
            />
            {/* btn */}
            <button className="border-[1px] border-[#bcbcbc] w-full text-[12px] h-[40px] font-semibold text-darkBlue tracking-[0.050em] lg:w-[15vw] lg:mt-[0.5vw] lg:text-[0.875vw] lg:h-[3.625vw] hover:bg-darkBlue duration-300 hover:text-white">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
