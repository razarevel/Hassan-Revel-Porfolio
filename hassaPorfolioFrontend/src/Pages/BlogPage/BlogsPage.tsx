import FooterMain from "../../Components/Footer/FooterMain";
import NavbarMain from "../../Components/Navbar/NavbarMain";
import BlogsGrid from "./BlogsComp/BlogGrid/BlogsGrid";
import BlogsFirst from "./BlogsComp/BlogsFirst";
import BlogsHeroLG from "./BlogsComp/BlogsHero/BlogsHeroLG";
import BlogsHeroSM from "./BlogsComp/BlogsHero/BlogsHeroSM";
import BlogsPaginate from "./BlogsComp/BlogsPaginate";

export default function BlogsPage() {
  return (
    <section id="blogsPage">
      <NavbarMain />
      <BlogsHeroSM />
      <BlogsHeroLG />
      <BlogsFirst />
      <BlogsGrid />
      <BlogsPaginate />
      <FooterMain />
    </section>
  );
}
