import FooterMain from "../../Components/Footer/FooterMain";
import NavbarMain from "../../Components/Navbar/NavbarMain";
import useZustand from "../../utilities/zustand";
import SolHero from "./SolutionComp/SolHero";

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
        <FooterMain />
      </div>
    </section>
  );
}
