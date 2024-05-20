import FooterMain from "../../Components/Footer/FooterMain";
import NavbarMain from "../../Components/Navbar/NavbarMain";
import useZustand from "../../utilities/zustand";
import SolGrid from "./SolutionComp/SolGrid";
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
        <SolGrid />
        <FooterMain />
      </div>
    </section>
  );
}
