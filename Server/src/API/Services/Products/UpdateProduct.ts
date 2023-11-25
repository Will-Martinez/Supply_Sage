import { ProductModel } from "../../../Database/Models/Entities/Products/Products";

export default class UpdateProduct {

    static async update(id: number | string, data: object): Promise<object> {
        try {
            return await ProductModel.update(data, {
                where: { id: id }
            });
        } catch (error) {
            throw error;
        }
    }
}