import OfficeSupply from "../ConcreteImplementations/OfficeSupply";
import StationaryFactory from "../Interfaces/StationaryFactory";
import StationaryProduct from "../Interfaces/StationaryProduct";

export default class OfficeSupplyFactory extends StationaryFactory {
    
    public createProduct(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean,
    ): StationaryProduct {
        return new OfficeSupply(category, productName, amount, price, available)
    }
}