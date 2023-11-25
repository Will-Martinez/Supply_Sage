import { ProductModel } from "../../../Database/Models/Entities/Products/Products";

export default class GetProducts {

    static async findProducts(): Promise<ProductModel[]> {
        try {
            return await ProductModel.findAll();
        } catch (error) {
            throw error;
        }
    }
}