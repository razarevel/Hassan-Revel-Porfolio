import NavbarMain from "../../Components/Navbar/NavbarMain";
import AboutHeroLg from "./AboutComp/AboutHero/AboutHeroLg";
import AboutHeroSm from "./AboutComp/AboutHero/AboutHeroSm";
import AboutSectionLG from "./AboutComp/AboutSec1/AboutSec1LG";
import AboutSectionSM from "./AboutComp/AboutSec1/AboutSec1SM";
import AboutSec2LG from "./AboutComp/AboutSec2/AboutSec2LG";
import AboutSec2SM from "./AboutComp/AboutSec2/AboutSec2SM";

export default function AboutPage() {
  return (
    <section id="aboutPage">
      <NavbarMain />
      <AboutHeroSm />
      <AboutHeroLg />
      <AboutSectionSM />
      <AboutSectionLG />
      <AboutSec2SM />
      <AboutSec2LG />
    </section>
  );
}