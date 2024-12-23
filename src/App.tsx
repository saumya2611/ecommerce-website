import BannerSection from "./BannerSection";
import BlogSection from "./Component/BlogSection";
import Categoery from "./Component/Category";
import FeaturesSectionBreak from "./Component/FeaturesSectionBreak";
import FeaturesSectionFruits from "./Component/FeaturesSectionFruits";
import Hero from "./Component/Hero";
import NavBar from "./Component/NavBar";
import NewsLetter from "./Component/NewsLetter";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Categoery />
      <FeaturesSectionFruits />
      <FeaturesSectionBreak />
      <BannerSection />
      <BlogSection />
      <NewsLetter />
      <FeatureSection />
      <Footer />
    </main>
  );
};

export default App;
