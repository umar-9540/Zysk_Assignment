import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Companies from "@/components/Companies";
import Features from "@/components/Features";
import Sisyphus from "@/components/Sisyphus";
import Faqs from "@/components/Faqs";
import Blogposts from "@/components/Blogposts";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Menu />
      <Main />
      <Companies />
      <Features />
      <Sisyphus />
      <Faqs />
      <Blogposts />
      <Footer />
    </div>
  );
}
