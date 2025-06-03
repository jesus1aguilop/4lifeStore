import axios from 'axios';
const api = axios.create({
    baseURL: "http://localhost:8000" // Adjust the base URL as needed
});

export const getProducts = async () => {
    const res = await api.get('/productos');
    return res.data;
};