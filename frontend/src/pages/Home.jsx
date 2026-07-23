import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import ArtisanStory from "../components/ArtisanStory";
import Footer from "../components/Footer";
import { getProducts } from "../services/productService";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-[#fffaf3] min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <ProductCard products={products} />
      <ArtisanStory />
      <Footer />
    </div>
  );
}