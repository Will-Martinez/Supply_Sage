import API from "../../API";

export default async function GetProducts() {
    try {
        return await API.get("/api/products/getProducts");
    } catch (error) {
        console.error(`Failed trying to get products: ${error.message}`);
        return;
    }
}