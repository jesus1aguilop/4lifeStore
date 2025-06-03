import { useEffect, useState } from 'react';
import { getProducts } from '../api';

export default function Home() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProducts().then(setProductos);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Productos 4life </h1>
            <div className="grif grid-cols-1 md:grid-cols-3 gap-4">
                {productos.map((p, i) => (
                    <div key={i} className="border p-4 rounded shadow">
                        <img src={p.imagen} alt={p.nombre} className="w-full h-40 object-cover"/>
                        <h2 className="font-semibold mt-2">{p.nombre}</h2>
                        <p>{p.descripcion}</p>
                        <a href={p.enlaceCompra} target="_blank" rel="noreferrer" className="text-blue-600 underline mt-2 block">Ir para comprar</a>
                    </div>
                ))}
            </div>
        </div>
    );
}