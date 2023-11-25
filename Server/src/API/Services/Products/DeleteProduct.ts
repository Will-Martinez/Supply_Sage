import { ProductModel } from "../../../Database/Models/Entities/Products/Products";

export default class DeleteProduct {
    static async deleteById(id: number | string): Promise<number> {
        try {
            const filter: object = {
                where: {
                    id: id
                }
            };
            return await ProductModel.destroy(filter);
        } catch (error) {
            throw error;
        }
    }
}