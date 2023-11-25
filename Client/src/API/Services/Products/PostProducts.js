import API from "../../API";

export default async function PostProduct(productData) {
    try {
        return await API.post(`/api/products/createProducts`, productData, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.error(`Failed trying to create a new product: ${error.message}`);
        return;
    }
}