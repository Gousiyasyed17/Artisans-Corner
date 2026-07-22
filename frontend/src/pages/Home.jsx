import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import ArtisanStory from "../components/ArtisanStory";
import Footer from "../components/Footer";


export default function Home() {

  return (

    <div className="bg-[#fffaf3] min-h-screen">

      <Navbar />

      <Hero />

      <Categories />

      <ProductCard />

      <ArtisanStory />

      <Footer />

    </div>

  );

}