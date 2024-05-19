import FooterMain from "../../Components/Footer/FooterMain";
import NavbarMain from "../../Components/Navbar/NavbarMain";
import useZustand from "../../utilities/zustand";
import BlogsGrid from "./BlogsComp/BlogGrid/BlogsGrid";
import BlogsFirst from "./BlogsComp/BlogsFirst";
import BlogsHeroLG from "./BlogsComp/BlogsHero/BlogsHeroLG";
import BlogsHeroSM from "./BlogsComp/BlogsHero/BlogsHeroSM";
import BlogsPaginate from "./BlogsComp/BlogsPaginate";

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
        <BlogsGrid />
        <BlogsPaginate />
        <FooterMain />
      </div>
    </section>
  );
}
