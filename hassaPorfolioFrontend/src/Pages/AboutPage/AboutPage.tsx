import FooterMain from "../../Components/Footer/FooterMain";
import NavbarMain from "../../Components/Navbar/NavbarMain";
import ScrollToTop from "../../utilities/ScrollToTop";
import useZustand from "../../utilities/zustand";
import AboutHeroLg from "./AboutComp/AboutHero/AboutHeroLg";
import AboutHeroSm from "./AboutComp/AboutHero/AboutHeroSm";
import AboutSectionLG from "./AboutComp/AboutSec1/AboutSec1LG";
import AboutSectionSM from "./AboutComp/AboutSec1/AboutSec1SM";
import AboutSec2LG from "./AboutComp/AboutSec2/AboutSec2LG";
import AboutSec2SM from "./AboutComp/AboutSec2/AboutSec2SM";
import AboutSec3LG from "./AboutComp/AboutSec3/AboutSec3LG";
import AboutSec3SM from "./AboutComp/AboutSec3/AboutSec3SM";
import AboutSec4 from "./AboutComp/AboutSec4/AboutSec4";

export default function AboutPage() {
  const { setSubsFixForm, setSubsForm } = useZustand();

  return (
    <section id="aboutPage">
      <NavbarMain />
      <div
        onClick={() => {
          setSubsForm(false);
          setSubsFixForm(false);
        }}
      >
        <AboutHeroSm />
        <AboutHeroLg />
        <AboutSectionSM />
        <AboutSectionLG />
        <AboutSec2SM />
        <AboutSec2LG />
        <AboutSec3SM />
        <AboutSec3LG />
        <AboutSec4 />
        <FooterMain />
      </div>
      <ScrollToTop />
    </section>
  );
}
