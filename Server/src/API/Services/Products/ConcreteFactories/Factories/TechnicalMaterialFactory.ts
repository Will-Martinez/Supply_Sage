import TechnicalMaterial from "../../ConcreteImplementations/TechnicalMaterial";
import StationaryFactory from "../../Interfaces/StationaryFactory";
import StationaryProduct from "../../Interfaces/StationaryProduct";

export default class TechnicalMaterialFactory implements StationaryFactory {

    createConcreteProduct(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean
    ): StationaryProduct {
        return new TechnicalMaterial(category, productName, amount, price, available);
    }
}
