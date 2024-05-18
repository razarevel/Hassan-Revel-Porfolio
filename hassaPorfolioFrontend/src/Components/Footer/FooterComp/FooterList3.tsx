import { useState } from "react";

export default function FooterList3() {
  const context = [
    `REVEL. AI News and updates`,
    `My AI tips and tricks`,
    `Updates on my AI solutions`,
  ];
  const [select, setSeleted] = useState<number[]>([]);
  const checkedBoolean = (index: number) => {
    if (select.includes(index)) return true;
    return false;
  };
  return (
    <div className="flex flex-col">
      <h1 className="mt-[70px] lg:mt-0 text-[25px] lg:text-[1.563vw] leading-[1.3] font-Bold">
        What are you interested In?
      </h1>
      {/* checkboxs */}
      <div className="text-[11px] lg:text-[.93vw] space-y-1 lg:space-y-[0.625vw] pt-[1.875vw]">
        {context.map((el, index) => (
          <div
            key={index}
            className="flex space-x-2"
            onClick={() => {
              if (select.includes(index))
                return setSeleted(() => select.filter((num) => num != index));
              return setSeleted([...select, index]);
            }}
          >
            <input
              type="checkbox"
              checked={checkedBoolean(index)}
              style={{ width: "20px", height: "20px" }}
            />
            <p>{el}</p>
          </div>
        ))}
      </div>
      {/* input */}
      <input
        type="text"
        placeholder="ENTER YOUR EMAIL ADDRESS"
        className="w-full pl-[10px] lg:pl-[1.25vw] h-[50px] text-[11px] mt-7 lg:h-[3.313vw] lg:text-[0.875vw] leading-normal lg:mt-[1.938vw] text-black focus:outline-none"
      />
      {/* btn */}
      <button className="text-[12px] h-[58px] lg:text-[1vw] lg:h-[3.625vw] lg:max-w-[9.375vw] lg:mt-[1.813vw]  submit-border font-Bold mt-7 duration-300 hover:bg-white hover:text-darkBlue ">
        SUBMIT
      </button>
    </div>
  );
}
