import API from "../../API";

export default async function DeleteProduct(id) {
    try {
        return await API.delete(`/api/products/deleteProduct/${id}`);
    } catch (error) {
        throw error;
    }
}