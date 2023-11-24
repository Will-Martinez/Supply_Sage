import ProductFactory from "./ProductFactory";
import StationaryProduct from "./Interfaces/StationaryProduct";

export default class CreateProduct {

    static createProduct(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean
    ): StationaryProduct {
        return ProductFactory.DefineProductFactory(category, productName, amount, price, available);
    }

}