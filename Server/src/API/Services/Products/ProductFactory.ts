import SchoolSupplyFactory from "./ConcreteFactories/SchoolSupplyFactory";
import SchoolSupply from "./ConcreteImplementations/SchoolSupply";
import StationaryProduct from "./Interfaces/StationaryProduct";

export default class ProductFactory {

    static DefineProductFactory(
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
                console.error("Failed trying to define product factory.");
                break;
        }
    }
}