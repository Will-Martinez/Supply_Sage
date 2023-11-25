import GetCategories from "../../Services/Categories/GetCategories";
import ResponseHandler from "../../Helpers/ResponseHandler";
import ObjectHandler from "../../Helpers/ObjectHandler";
import { CategoriesModel } from "../../../Database/Models/Entities/Categories/Categories";
import { Response } from "express";

export default class CategoryController {
    
    private local: string = "[ CATEGORY-CONTROLLER ]";

    public async getAll(res: Response): Promise<Response> {
        try {
            const result: CategoriesModel[] = await GetCategories.findCategories();
            const isResultValid: boolean = ObjectHandler.isArrayNotEmpty(result);
            if (isResultValid == false) {
                return ResponseHandler.ReturnResponse(
                    "Error",
                    "Categories not founded.",
                    404,
                    null,
                    res
                );
            }

            return ResponseHandler.ReturnResponse(
                "Success",
                "Categories founded.",
                200,
                result,
                res
            );
        } catch (error) {
            console.error(`${this.local} Failed trying to get categories: ${error.message}`);
            return ResponseHandler.ReturnResponse(
                "Error",
                `Internal server error: ${error.message}`,
                500,
                null,
                res
            );
        }
    }
}