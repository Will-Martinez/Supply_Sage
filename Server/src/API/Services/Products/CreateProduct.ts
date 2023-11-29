import StationaryFactory from "./Interfaces/StationaryFactory";
import StationaryProduct from "./Interfaces/StationaryProduct";
import DefineFactory from "./ConcreteFactories/DefineFactory";

export default class CreateProduct extends DefineFactory {

    static create(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean
    ): StationaryProduct {
        const concreteFactory: StationaryFactory = this.returnConcreteFactory(category);
        return concreteFactory.createConcreteProduct(
            category,
            productName,
            amount,
            price,
            available
        );
    }
}