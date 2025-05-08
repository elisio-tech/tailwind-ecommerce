import Category from "../components/Category";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Shop from "../components/Shop";
import Trand from "../components/Trand";
import Work from "../components/Work";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Trand />
      <Work />
      <Category />
      <Shop />
      <Footer />
    </div>
  );
}
