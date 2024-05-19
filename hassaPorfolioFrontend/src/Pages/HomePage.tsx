import NavbarMain from "../Components/Navbar/NavbarMain";
import useZustand from "../utilities/zustand";

export default function HomePage() {
  const { subsForms, setSubsForm } = useZustand();
  return (
    <section id="Home">
      <NavbarMain />
    </section>
  );
}
