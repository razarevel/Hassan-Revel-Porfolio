import FooterMain from "../../Components/Footer/FooterMain";
import NavbarMain from "../../Components/Navbar/NavbarMain";
import ScrollToTop from "../../utilities/ScrollToTop";
import useZustand from "../../utilities/zustand";
import PaginatedGrid from "../PaginatedGrid";
import SolHero from "./SolutionComp/SolHero";
import SolutionHeading from "./SolutionComp/SolutionHeading";

export default function SolutionPage() {
  const { setSubsFixForm, setSubsForm } = useZustand();
  return (
    <section id="solutionPage">
      <NavbarMain />
      <div
        onClick={() => {
          setSubsForm(false);
          setSubsFixForm(false);
        }}
      >
        <SolHero />
        <SolutionHeading />
        {/* <SolGrid /> */}
        <PaginatedGrid api="solutions" />
        <FooterMain />
      </div>
      <ScrollToTop />
    </section>
  );
}
