import { CategoriesModel } from "../../../Database/Models/Entities/Categories/Categories";

export default class GetCategories {
    static async findCategories(): Promise<CategoriesModel[]> {
        try {
            const filter: object = {
                attributes: ["name"]
            }

            return await CategoriesModel.findAll(filter);
        } catch (error) {
            throw error;
        }
    }
}