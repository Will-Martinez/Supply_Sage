import SchoolSupply from "../ConcreteImplementations/SchoolSupply";
import StationaryProduct from "../Interfaces/StationaryProduct";
import StationaryFactory from "../Interfaces/StationaryFactory";

export default class SchoolSupplyFactory extends StationaryFactory {
    public createProduct(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean,
    ): StationaryProduct {
        return new SchoolSupply(category, productName, amount, price, available)
    }
}