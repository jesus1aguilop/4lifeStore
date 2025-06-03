import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ProductForm = ({ getProducts, editProduct, setEditProduct }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (editProduct) {
            reset(editProduct);
        } else {
            reset();
        }
    }, [editProduct, reset]);

    const onSubmit = async (data) => {
        if (editProduct?.id) {
            await axios.put(`http://localhost:8000/productos/${editProduct.id}`, data);
        } else {
            await axios.post("http://localhost:8000/productos", data);
        }
        getProducts();
        reset();
        setEditProduct(null);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 bg-white rounded shadow">
            <input
                {...register("nombre", { required: "El nombre es obligatorio" })}
                placeholder="Nombre del producto"
                className="border p-2 w-full"
            />
            {errors.nombre && <p className="text-red-600">{errors.nombre.message}</p>}

            <textarea
                {...register("descripcion", { required: "La descripción es obligatoria" })}
                placeholder="Descripción"
                className="border p-2 w-full"
            />
            {errors.descripcion && <p className="text-red-600">{errors.descripcion.message}</p>}

            <input
                {...register("imagen", {
                    required: "La URL de imagen es obligatoria",
                    pattern: {
                        value: /^https?:\/\/.+\.(jpg|jpeg|png|webp)$/,
                        message: "Debe ser una URL válida de imagen",
                    },
                })}
                placeholder="URL de imagen"
                className="border p-2 w-full"
            />
            {errors.imagen && <p className="text-red-600">{errors.imagen.message}</p>}

            <input
                {...register("enlaceCompra", {
                    required: "El enlace de compra es obligatorio",
                    pattern: {
                        value: /^https?:\/\/.+$/,
                        message: "Debe ser una URL válida",
                    },
                })}
                placeholder="Enlace de compra"
                className="border p-2 w-full"
            />
            {errors.enlaceCompra && <p className="text-red-600">{errors.enlaceCompra.message}</p>}

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                {editProduct ? "Actualizar" : "Agregar"} producto
            </button>
        </form>
    );
};

export default ProductForm;