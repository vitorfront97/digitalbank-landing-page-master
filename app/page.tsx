import Header from "./widgets/Header";
import Main from "./widgets/Main";
import SectionCards from "./widgets/SectionCards";
import SectionArticles from "./widgets/SectionArticles";
import Footer from "./widgets/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <SectionCards />
      <SectionArticles />
      <Footer />
    </div>
  );
}
