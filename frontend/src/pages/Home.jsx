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

    console.log("Products received:", data);
    console.log("Type:", typeof data);
    console.log("Length:", data?.length);

    setProducts(data);
  } catch (error) {
    console.error("Load Error:", error);
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