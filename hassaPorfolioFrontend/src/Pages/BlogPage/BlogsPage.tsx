import FooterMain from "../../Components/Footer/FooterMain";
import NavbarMain from "../../Components/Navbar/NavbarMain";
import BlogsHero from "./BlogsComp/BlogsHero";

export default function BlogsPage() {
  return (
    <section id="blogsPage">
      <NavbarMain />
      <BlogsHero />
      <FooterMain />
    </section>
  );
}
