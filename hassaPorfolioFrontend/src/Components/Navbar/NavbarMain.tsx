import { useInView } from "framer-motion";
import NavDesktop from "./NavComp/NavDesktop/NavDesktop";
import NavMobile from "./NavComp/NavMobil/NavMobile";
import { useRef } from "react";
import AbsoluteNav from "./NavComp/AbsoluteNav/AbsoluteNav";

export default function NavbarMain() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section id="nav" className="relative">
      <NavDesktop show={isInView} />
      <AbsoluteNav />
      <NavMobile />
      <div
        className="absolute w-full top-0 left-0 h-[100%] -z-10  "
        ref={ref}
      ></div>
    </section>
  );
}
