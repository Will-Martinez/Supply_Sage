import OfficeSupply from "../../ConcreteImplementations/OfficeSupply";
import StationaryFactory from "../../Interfaces/StationaryFactory";
import StationaryProduct from "../../Interfaces/StationaryProduct";

export default class OfficeSupplyFactory implements StationaryFactory {
    
    public createConcreteProduct(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean,
    ): StationaryProduct {
        return new OfficeSupply(category, productName, amount, price, available)
    }
}