import FooterMain from "../../Components/Footer/FooterMain";
import NavbarMain from "../../Components/Navbar/NavbarMain";
import ScrollToTop from "../../utilities/ScrollToTop";
import useZustand from "../../utilities/zustand";
import PaginatedGrid from "../PaginatedGrid";
import BlogsFirst from "./BlogsComp/BlogsFirst";
import BlogsHeading from "./BlogsComp/BlogsHeading";
import BlogsHeroLG from "./BlogsComp/BlogsHero/BlogsHeroLG";
import BlogsHeroSM from "./BlogsComp/BlogsHero/BlogsHeroSM";

export default function BlogsPage() {
  const { setSubsFixForm, setSubsForm } = useZustand();

  return (
    <section id="blogsPage">
      <NavbarMain />
      <div
        onClick={() => {
          setSubsForm(false);
          setSubsFixForm(false);
        }}
      >
        <BlogsHeroSM />
        <BlogsHeroLG />
        <BlogsFirst />
        <BlogsHeading />
        <PaginatedGrid api="blogs" />
        <FooterMain />
      </div>
      <ScrollToTop />
    </section>
  );
}
