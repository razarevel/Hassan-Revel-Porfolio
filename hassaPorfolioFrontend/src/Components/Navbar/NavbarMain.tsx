import { useInView } from "framer-motion";
import NavDesktop from "./NavComp/NavDesktop/NavDesktop";
import NavMobile from "./NavComp/NavMobil/NavMobile";
import { useRef } from "react";

export default function NavbarMain() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section id="nav">
      <div
        className="absolute w-full top-0 left-0 h-[5vw] bg-black"
        ref={ref}
      ></div>
      <NavDesktop show={isInView} />
      <NavMobile />
    </section>
  );
}
