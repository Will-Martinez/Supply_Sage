import FineStationary from "../ConcreteImplementations/FineStationary";
import StationaryFactory from "../Interfaces/StationaryFactory";
import StationaryProduct from "../Interfaces/StationaryProduct";

export default class FineStationaryFactory extends StationaryFactory {

    createProduct(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean,
    ): StationaryProduct {
        return new FineStationary(category, productName, amount, price, available);
    }
}