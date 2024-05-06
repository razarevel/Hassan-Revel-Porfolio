import NavDesktop from "./NavComp/NavDesktop/NavDesktop";
import NavMobile from "./NavComp/NavMobile";

export default function NavbarMain() {
  return (
    <section id="nav">
      <NavDesktop />
      <NavMobile />
    </section>
  );
}
