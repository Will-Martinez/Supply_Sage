import API from "../../API";

export default async function GetCategories() {
    try {
        return await API.get("/api/categories/getCategories");
    } catch (error) {
        throw error;
    }
}