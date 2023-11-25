import API from "../../API";

export default async function UpdateProduct(id, objData) {
    try {
        await API.put(`/api/products/updateProduct/${id}`, objData);
    } catch (error) {
        throw error;
    }
}