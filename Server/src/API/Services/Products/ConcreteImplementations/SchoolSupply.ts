import StationaryProduct from "../Interfaces/StationaryProduct";

export default class SchoolSupply extends StationaryProduct{

    constructor (
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean
    ) {
        super();
        this.category = category;
        this.productName = productName;
        this.amount = amount;
        this.price = price;
        this.available = available
    }

    public toDatabaseObject(): object {
        return {
            category: this.category,
            productName: this.productName,
            amount: this.amount,
            price: this.price,
            available: this.available
        }
    }


}