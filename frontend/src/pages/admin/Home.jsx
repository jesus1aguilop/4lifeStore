import { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';
import ProductCard from '../../components/ProductCard';

export default function Home() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProducts().then(setProductos);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Productos 4life</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {productos.map((p, i) => (
                    <ProductCard key={i} product={p} />
                ))}
            </div>
        </div>
    );
}