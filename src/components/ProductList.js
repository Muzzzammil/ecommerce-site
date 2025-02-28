import { useEffect, useState } from "react";
import supabase from "../supabaseClient";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase.from("Products").select("*");
            if (error) console.log("Error fetching products:", error);
            else setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <img src={product.image_url} alt={product.name} width="150" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
