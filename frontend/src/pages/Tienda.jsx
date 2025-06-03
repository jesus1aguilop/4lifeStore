import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Tienda = () => {
    const [productos, setProductos] = useState([]);

    const getProducts = async () => {
        const res = await axios.get("http://localhost:8000/productos");
        setProductos(res.data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Tienda 4Life</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {productos.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
};

export default Tienda;