import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import ProductForm from "../../components/ProductForm";
import ProductCard from "../../components/ProductCard";

const Admin = () => {
    const [productos, setProductos] = useState([]);
    const [editProduct, setEditProduct] = useState(null);

    const fetchProducts = async () => {
        const data = await getProducts();
        setProductos(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Administrar Productos</h1>
            <ProductForm getProducts={fetchProducts} editProduct={editProduct} setEditProduct={setEditProduct} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {productos.map((p) => (
                    <div key={p.id} onClick={() => setEditProduct(p)}>
                        <ProductCard product={p} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admin;