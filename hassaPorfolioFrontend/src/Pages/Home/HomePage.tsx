import FooterMain from "../../Components/Footer/FooterMain";
import NavbarMain from "../../Components/Navbar/NavbarMain";
import ScrollToTop from "../../utilities/ScrollToTop";
import useZustand from "../../utilities/zustand";
import AboutAI from "./HomeComps/AboutAI";
import BlogSec from "./HomeComps/BlogsSection/BlogSec";
import HomeHero from "./HomeComps/HomeHero";
import Reviews from "./HomeComps/Reviews/Reviews";
import SocialMedia from "./HomeComps/SocialMedia/SocialMedia";
import SolutionSec from "./HomeComps/SolutionSec";

export default function HomePage() {
  const { setSubsFixForm, setSubsForm } = useZustand();
  return (
    <section id="Home">
      <NavbarMain />
      <div
        onClick={() => {
          setSubsForm(false);
          setSubsFixForm(false);
        }}
      >
        <HomeHero />
        <AboutAI />
        <SolutionSec />
        <Reviews />
        <BlogSec />
        <SocialMedia />
        <FooterMain />
      </div>
      <ScrollToTop />
    </section>
  );
}
