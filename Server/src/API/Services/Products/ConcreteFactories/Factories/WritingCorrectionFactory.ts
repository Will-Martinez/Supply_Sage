import WritingCorrection from "../../ConcreteImplementations/WritingCorrection";
import StationaryProduct from "../../Interfaces/StationaryProduct";
import StationaryFactory from "../../Interfaces/StationaryFactory";

export default class WritingCorrectionFactory implements StationaryFactory {

    createConcreteProduct(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean,
    ): StationaryProduct {
        return new WritingCorrection(category, productName, amount, price, available);
    }
}