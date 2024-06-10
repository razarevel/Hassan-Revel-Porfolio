import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useZustand from "../../../utilities/zustand";
interface Data {
  aiNews: boolean;
  aiTips: boolean;
  aiUpdates: boolean;
  email: string;
}

export default function FooterList3() {
  const context = [
    `REVEL. AI News and updates`,
    `My AI tips and tricks`,
    `Updates on my AI solutions`,
  ];
  const [select, setSeleted] = useState<number[]>([]);
  const [showError, setShowError] = useState(false);
  const { apiUrl } = useZustand();
  const checkedBoolean = (index: number) => {
    if (select.includes(index)) {
      return true;
    }
    return false;
  };
  const { register, handleSubmit, reset } = useForm();
  const Data = {
    aiNews: false,
    aiTips: false,
    aiUpdates: false,
    email: "",
  };
  const url = apiUrl + "subscribe/";
  const mutation = useMutation((data: Data) => axios.put(url, data));
  return (
    <form
      className="flex flex-col"
      onSubmit={handleSubmit((data) => {
        Data.aiNews = select.includes(0);
        Data.aiTips = select.includes(1);
        Data.aiUpdates = select.includes(2);
        Data.email = data.email || "";
        if ((!Data.aiNews && !Data.aiTips && !Data.aiUpdates) || !Data.email) {
          setShowError(true);
          return;
        }
        mutation.mutate(Data);
        if (!mutation.isLoading) {
          setShowError(false);
          setSeleted([]);
          reset();
        }
      })}
    >
      <h1 className="mt-[70px] lg:mt-0 text-[25px] lg:text-[1.563vw] leading-[1.3] font-Bold">
        What are you interested In?
      </h1>
      {showError && (
        <p className="mx-auto bg-white font-Bold text-center text-[12px] lg:text-[0.750vw]  border-[2px] border-[#790000] text-[#790000] py-[16px] my-[25px] w-full">
          You have error in your submission. Please review and{" "}
          <br className="hidden lg:block" /> try again
        </p>
      )}
      {/* checkboxs */}
      <div className="text-[11px] lg:text-[.93vw] space-y-1 lg:space-y-[0.625vw] pt-[1.875vw] ">
        {context.map((el, index) => (
          <div
            key={index}
            className="flex items-start space-x-2 cursor-pointer"
            onClick={() => {
              if (select.includes(index))
                return setSeleted(() => select.filter((num) => num != index));
              return setSeleted([...select, index]);
            }}
          >
            <div style={{ width: "20px", height: "20px" }}>
              <input
                {...register(`check${index.toString()}`)}
                type="checkbox"
                checked={checkedBoolean(index)}
                className="w-full h-full cursor-pointer"
              />
            </div>
            <p className="duration-300 hover:opacity-70">{el}</p>
          </div>
        ))}
      </div>
      {/* input */}
      <input
        {...register("email")}
        type="email"
        placeholder="ENTER YOUR EMAIL ADDRESS"
        className="w-full pl-[10px] lg:pl-[1.25vw] h-[50px] text-[11px] mt-7 lg:h-[3.313vw] lg:text-[0.875vw] leading-normal lg:mt-[1.938vw] text-black focus:outline-none"
      />
      {/* btn */}
      <button className="text-[12px] h-[58px] lg:text-[1vw] lg:h-[3.625vw] lg:max-w-[9.375vw] lg:mt-[1.813vw]  submit-border font-Bold mt-7 duration-300 hover:bg-white hover:text-darkBlue ">
        SUBMIT
      </button>
    </form>
  );
}
