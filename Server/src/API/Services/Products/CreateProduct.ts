import StationaryFactory from "./Interfaces/StationaryFactory";
import StationaryProduct from "./Interfaces/StationaryProduct";
import DefineFactory from "./ConcreteFactories/DefineFactory";

export default class CreateProduct {

    static create(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean
    ): StationaryProduct {
        const concreteFactoryDefinition: DefineFactory = new DefineFactory();
        const concreteFactory: StationaryFactory = concreteFactoryDefinition.returnConcreteFactory(category);
        return concreteFactory.createProduct(category, productName, amount, price, available);
    }
}