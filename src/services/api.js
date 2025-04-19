import axios from 'axios';

const BASE_URL = 'http://192.168.0.104:8080/api/v1'; // Replace with your backend URL

const api = axios.create({
    baseURL: BASE_URL,
});




export const addProductByBarcode = async (barcode) => {
    try {
        const response = await api.post(`/products/barcode/${barcode}`);
        console.log('api.js: Added product:', response.data);
        return response;
    } catch (error) {
        console.error('api.js: Error adding product:', error);
        throw error;
    }
};

export const getAllProducts = async () => {
    try {
        const response = await api.get('/products/getAllProducts');
        console.log('api.js: Fetched all products:', response.data);
        return response;
    } catch (error) {
        console.error('api.js: Error fetching products:', error);
        throw error;
    }
};

export const getAllCategories = async () => {
    try {
        const response = await api.get('/category/getAllCategories');
        console.log('api.js: Fetched all categories:', response.data);
        return response;
    } catch (error) {
        console.error('api.js: Error fetching categories:', error);
        throw error;
    }
};

export const updateProductCategory = async (productId, category) => {
    try {
        const response = await api.patch(`/products/${productId}/category`, { category });
        console.log('api.js: Updated product category:', response.data);
        return response;
    } catch (error) {
        console.error('api.js: Error updating category:', error);
        throw error;
    }
};
