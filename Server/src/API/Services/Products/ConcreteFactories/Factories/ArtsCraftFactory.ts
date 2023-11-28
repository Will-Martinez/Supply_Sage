import ArtsCraft from "../../ConcreteImplementations/ArtsCraft";
import StationaryProduct from "../../Interfaces/StationaryProduct";
import StationaryFactory from "../../Interfaces/StationaryFactory";

export default class ArtsCraftFactory implements StationaryFactory {

    public createConcreteProduct(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean,
    ): StationaryProduct {
        return new ArtsCraft(category, productName, amount, price, available);
    }
}