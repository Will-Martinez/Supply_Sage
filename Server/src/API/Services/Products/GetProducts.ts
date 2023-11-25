import { ProductModel } from "../../../Database/Models/Entities/Products/Products";

export default class GetProducts {

    static async findProducts(): Promise<ProductModel[]> {
        try {
            return await ProductModel.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async findProductById(id: number | string): Promise<ProductModel> {
        try {
            return await ProductModel.findByPk(id);
        } catch (error) {
            throw error;
        }
    }
}