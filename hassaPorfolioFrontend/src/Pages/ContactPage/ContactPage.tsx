import FooterMain from "../../Components/Footer/FooterMain";
import NavbarMain from "../../Components/Navbar/NavbarMain";
import ContactForm from "./ContactComp/ContactForm";

export default function ContactPage() {
  return (
    <section id="contactPage">
      <NavbarMain />
      <ContactForm />
      <FooterMain />
    </section>
  );
}
