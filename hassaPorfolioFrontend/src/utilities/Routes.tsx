import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import SolutionPage from "../Pages/SolutionPage/SolutionPage";
import PortfolioPage from "../Pages/Portfolio";
import BlogsPage from "../Pages/BlogPage/BlogsPage";
import VlogsPage from "../Pages/VlogsPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import Success from "../Pages/SuccessPage/Success";
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/solutions", element: <SolutionPage /> },
  { path: "/portfolio", element: <PortfolioPage /> },
  { path: "/blogs", element: <BlogsPage /> },
  { path: "/vlogs", element: <VlogsPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/success", element: <Success /> },
]);
export default router;
