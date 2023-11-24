import { ProductModel } from "../../../Database/Models/Entities/Products/Products";
import CreateProduct from "../../Services/Products/CreateProduct";

interface BodyRequest {
    category: string,
    productName: string,
    amount: number,
    price: number,
    available: boolean
}

export default class ProductController {

    private local: string = "[ PRODUCT-CONTROLLER ]"

    public async create(body: BodyRequest): Promise<ProductModel> {
        try {
            const { category, productName, amount, price, available } = body;
            const product = CreateProduct.createProduct(category, productName, amount, price, available);
            const objectProduct = product.toDatabaseObject();
            return await ProductModel.create(objectProduct);
        } catch (error) {
            console.error(`${this.local} Failed trying to create a new product: ${error.message}`);
            return;
        }
    }
}