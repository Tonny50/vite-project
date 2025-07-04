import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import Header from "../../components/Header";
import ProductsGrid from "./ProductsGrid";
function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };

    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}

export default HomePage;
