import React, { useState, useEffect } from "react";
import supabase from "./supabaseClient";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Function to fetch initial products
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        console.error("Error fetching products:", error.message);
      } else {
        setProducts(data);
      }
    };

    fetchProducts();

    // Set up real-time listener
    const productSubscription = supabase
      .channel("public:products")
      .on("postgres_changes", { event: "*", schema: "public", table: "products" }, (payload) => {
        console.log("Change received!", payload);
        fetchProducts(); // Refetch products when database changes
      })
      .subscribe();

    return () => {
      supabase.removeChannel(productSubscription); // Clean up subscription
    };
  }, []);

  return (
    <div>
      <h2>Our Products</h2>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> - ${product.price}
            </li>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
