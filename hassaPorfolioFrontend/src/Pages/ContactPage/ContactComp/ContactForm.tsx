import { useCallback, useEffect, useState } from "react";
import ContactImage from "./ContactImage";
import countries from "./countries";
import FormHeading from "./FormHeading";
import { FieldValue, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useZustand from "../../../utilities/zustand";
interface Countries {
  name: string;
  code: string;
  emoji: string;
  unicode: string;
  image: string;
  dial_code: string;
}
interface Data {
  first_name: string;
  last_name: string;
  email: string;
  dial_code: string;
  country: string;
  msg: string;
  phone: number;
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

  const keyCapture: any = useCallback(
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
  // form submition handler
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  // const [errorIndex, setErrorIndex] = useState<number[]>([]);
  const { apiUrl } = useZustand();
  const url = apiUrl + "messages/";

  const mutation = useMutation((data: Data) => axios.put(url, data));

  // console.log(errors);
  return (
    <div
      className="lg:flex justify-between mb-[56px] lg:mb-[12vw]"
      onClick={() => show && setShow(false)}
    >
      <ContactImage />
      <div className="px-[30px] py-[60px] lg:order-1 lg:w-[55.18%] lg:mt-[13vw] lg:p-0 lg:pr-[4vw] lg:pl-[5.125vw]">
        {/* heading */}
        <FormHeading />
        <form
          className="flex flex-col space-y-[10px] lg:space-y-0 mt-[1.2vw]"
          onSubmit={handleSubmit((data) => {
            // submition
            const Data = {
              first_name: data.first_name,
              last_name: data.second_name,
              email: data.email,
              dial_code: flags[select].dial_code,
              country: flags[select].name,
              msg: data.msg,
              phone: data.phone,
            };
            mutation.mutate(Data);
            setSelect(0);
            reset();
          })}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-[1.250vw] lg:pb-[1.250vw]">
            {/* first name */}
            <div className="">
              <input
                {...register("first_name", { required: true })}
                type="text"
                className="focus:outline-none border-[1px] border-[#bcbcbc] w-full h-[42px] text-[12px] px-[10px] text-[#333333] placeholder:text-[#333333] lg:h-[3.063vw] lg:px-[1.375vw] lg:text-[0.875vw]"
                placeholder="First Name"
              />
              {errors.first_name?.type === "required" && (
                <p className="text-[12px] font-Bold mt-2 py-[16px] px-[10px] lg:px-[1vw] lg:py-[1vw] lg:text-[0.750vw] border-[2px] text-[#790000] border-[#790000] bg-[#FFF9F9]">
                  Please type for first Name
                </p>
              )}
            </div>
            {/* last name */}
            <div>
              <input
                {...register("second_name", { required: true })}
                type="text"
                className="focus:outline-none border-[1px] border-[#bcbcbc] w-full h-[42px] text-[12px] px-[10px] text-[#333333] placeholder:text-[#333333] lg:h-[3.063vw] lg:px-[1.375vw] lg:text-[0.875vw]"
                placeholder="Last Name"
              />
              {errors.second_name?.type === "required" && (
                <p className="text-[12px] font-Bold mt-2 py-[16px] px-[10px] lg:px-[1vw] lg:py-[1vw] lg:text-[0.750vw] border-[2px] text-[#790000] border-[#790000] bg-[#FFF9F9]">
                  Please type for Second Name
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-[1.250vw] lg:pb-[1.250vw] ">
            {/* Email */}
            <div>
              <input
                {...register("email", { required: true })}
                type="email"
                className="focus:outline-none border-[1px] border-[#bcbcbc] w-full h-[42px] text-[12px] px-[10px] text-[#333333] placeholder:text-[#333333] lg:h-[3.063vw] lg:px-[1.375vw] lg:text-[0.875vw]"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-[12px] font-Bold mt-2 py-[16px] px-[10px] lg:px-[1vw] lg:py-[1vw] lg:text-[0.750vw] border-[2px] text-[#790000] border-[#790000] bg-[#FFF9F9]">
                  Please type for email
                </p>
              )}
            </div>
            {/* Phone */}
            <div>
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
                        className="flex items-center justify-between bg-white px-4 hover:bg-slate-300 duration-300"
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
                  {...register("phone", {
                    valueAsNumber: true,
                    required: true,
                  })}
                  type="number"
                  className="focus:outline-none  text-[#333333] placeholder:text-[#333333] remove-arrow w-full"
                  placeholder="Phone"
                />
              </div>
              {errors.phone?.type === "required" && (
                <p className="text-[12px] font-Bold mt-2 py-[16px] px-[10px] lg:px-[1vw] lg:py-[1vw] lg:text-[0.750vw] border-[2px] text-[#790000] border-[#790000] bg-[#FFF9F9]">
                  Please type for Number
                </p>
              )}
            </div>
          </div>
          {/* textarea */}
          <div>
            <textarea
              className="focus:outline-none border-[1px] border-[#bcbcbc] w-full text-[12px] px-[10px] text-[#333333] placeholder:text-[#333333] resize-none h-[80px] p-[10px] lg:p-0 lg:py-[1.125vw] lg:px-[1.375vw] lg:h-[7.438vw] lg:text-[0.875vw] lg:mb-[1.250vw]"
              placeholder="Your message"
              {...register("msg", { required: true })}
            />
            {errors.msg?.type === "required" && (
              <p className="text-[12px] font-Bold py-[16px] px-[10px] lg:px-[1vw] lg:py-[1vw] lg:text-[0.750vw] border-[2px] text-[#790000] border-[#790000] bg-[#FFF9F9] lg:translate-y-[-1.2vw]">
                Please type for message
              </p>
            )}
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
