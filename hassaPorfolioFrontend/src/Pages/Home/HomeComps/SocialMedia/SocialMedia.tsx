import { useRef } from "react";
import SocialGrid from "./SocialGrid";
import SocialHeading from "./SocialHeading";
import { useInView } from "framer-motion";

export default function SocialMedia() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      id="socialMedia"
      className="bg-[#1C1C1F] text-white pt-[70px] pb-[65px] space-y-[76px]"
      ref={ref}
    >
      <h1 className="text-[40px] font-Black px-[30px] lg:px-[3.2vw] lg:text-[3vw]">
        R.  
      </h1>
      <SocialGrid isInView={isInView} />
      <SocialHeading isInView={isInView} />
    </section>
  );
}
