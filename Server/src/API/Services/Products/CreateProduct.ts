import StationaryProduct from "./Interfaces/StationaryProduct";
import SchoolSupplyFactory from "./ConcreteFactories/SchoolSupplyFactory";

export default class CreateProduct {

    static createProduct(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean
    ): StationaryProduct {
        switch(category) {
            case "School Supply":
                const schoolSupplyFactory: SchoolSupplyFactory = new SchoolSupplyFactory();
                const schoolSupplyProduct = schoolSupplyFactory.createProduct(category, productName, amount, price, available);
                return schoolSupplyProduct
            default:
                throw new Error("Failed trying to define product factory.")
        }
    }

}