import { useState, useRef } from "react";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./components/Toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import {
  Testimonials,
  BrandPartners,
  Newsletter,
  FAQ,
} from "./components/Extras";
import Footer from "./components/Footer";

function AppContent() {
  const [category, setCategory] = useState("all");
  const [dark, setDark] = useState(true);
  const productsRef = useRef(null);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    productsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleDark = () => setDark((prev) => !prev);

  const bodyStyle = {
    background: dark ? "#0A0A0A" : "#F8F8F8",
    color: dark ? "#F5F5F5" : "#0A0A0A",
    transition: "background 0.4s ease, color 0.4s ease",
    minHeight: "100vh",
    overflowX: "hidden",
  };

  return (
    <div className={dark ? "theme-dark" : "theme-light"} style={bodyStyle}>
      <Navbar
        onCategoryChange={handleCategoryChange}
        dark={dark}
        toggleDark={toggleDark}
      />
      <Hero onShop={scrollToProducts} dark={dark} />
      <BrandPartners dark={dark} />
      <Categories onSelect={handleCategoryChange} dark={dark} />
      <div ref={productsRef}>
        <Products
          category={category === "all" ? "" : category}
          search=""
          dark={dark}
        />
      </div>
      <Testimonials dark={dark} />
      <Newsletter dark={dark} />
      <FAQ dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </CartProvider>
  );
}
