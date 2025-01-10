import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Companies from "@/components/Companies";
import Features from "@/components/Features";
import Sisyphus from "@/components/Sisyphus";
import Faqs from "@/components/Faqs";
import Blogposts from "@/components/Blogposts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
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
