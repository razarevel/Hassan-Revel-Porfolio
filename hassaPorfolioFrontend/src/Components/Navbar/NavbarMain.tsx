import { useInView } from "framer-motion";
import NavDesktop from "./NavComp/NavDesktop/NavDesktop";
import NavMobile from "./NavComp/NavMobil/NavMobile";
import { useEffect, useRef } from "react";
import AbsoluteNav from "./NavComp/AbsoluteNav/AbsoluteNav";
import useZustand from "../../utilities/zustand";

export default function NavbarMain() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { setSubsForm, setSubsFixForm } = useZustand();
  useEffect(() => {
    setSubsForm(false);
    setSubsFixForm(false);
  }, [isInView]);
  return (
    <section id="nav" className="relative">
      <NavDesktop show={isInView} />
      <AbsoluteNav />
      <NavMobile />
      <div
        className="absolute w-full top-0 left-0 h-[15vw] -z-10 "
        ref={ref}
      ></div>
    </section>
  );
}
