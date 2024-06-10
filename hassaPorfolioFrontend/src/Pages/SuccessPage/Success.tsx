import { useEffect } from "react";
import FooterMain from "../../Components/Footer/FooterMain";
import NavbarMain from "../../Components/Navbar/NavbarMain";
import ScrollToTop from "../../utilities/ScrollToTop";
import useZustand from "../../utilities/zustand";
import SuccessGrid from "./SuccessGrid";
import SuccessHero from "./SuccessHero";

export default function Success() {
  const { setSubsFixForm, setSubsForm } = useZustand();
  useEffect(() => {
    document.title = "Hassan Revel Reviews";
  }, []);
  return (
    <section id="success">
      <NavbarMain />
      <div
        onClick={() => {
          setSubsForm(false);
          setSubsFixForm(false);
        }}
      >
        <SuccessHero />
        <SuccessGrid />
        <FooterMain />
      </div>
      <ScrollToTop />
    </section>
  );
}
