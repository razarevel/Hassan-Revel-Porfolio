import { useEffect } from "react";
import FooterMain from "../../Components/Footer/FooterMain";
import NavbarMain from "../../Components/Navbar/NavbarMain";
import ScrollToTop from "../../utilities/ScrollToTop";
import useZustand from "../../utilities/zustand";
import ContactForm from "./ContactComp/ContactForm";

export default function ContactPage() {
  const { setSubsFixForm, setSubsForm } = useZustand();
  useEffect(() => {
    document.title = "Contact Hassan Revel";
  }, []);
  return (
    <section id="contactPage">
      <NavbarMain />
      <div
        onClick={() => {
          setSubsForm(false);
          setSubsFixForm(false);
        }}
      >
        <ContactForm />
        <FooterMain />
      </div>
      <ScrollToTop />
    </section>
  );
}
