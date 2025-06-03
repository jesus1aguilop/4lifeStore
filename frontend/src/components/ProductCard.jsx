const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md bg-white">
            <img src={product.imagen} alt={product.nombre} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold mt-2">{product.nombre}</h3>
            <p className="text-gray-700">{product.descripcion}</p>
            <a
                href={product.enlaceCompra}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded"
            >
                Comprar
            </a>
        </div>
    );
};

export default ProductCard;