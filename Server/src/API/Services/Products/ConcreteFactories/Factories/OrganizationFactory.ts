import Organization from "../../ConcreteImplementations/Organization";
import StationaryProduct from "../../Interfaces/StationaryProduct";
import StationaryFactory from "../../Interfaces/StationaryFactory";

export default class OrganizationFactory implements StationaryFactory {

    public createConcreteProduct(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean,
    ): StationaryProduct {
        return new Organization(category, productName, amount, price, available);
    }
}