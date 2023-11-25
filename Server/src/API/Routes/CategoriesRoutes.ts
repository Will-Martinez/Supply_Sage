import CategoryController from "../Controllers/Categories/CategoryController";
import express, { Request, Response, Router } from "express";

const categoryController: CategoryController = new CategoryController();

export default class CategoriesRoutes {

    private local: string = "[ CATEGORY-ROUTES ]";
    private router: Router = express.Router();

    private DefineRoutes(): void {

        this.router.get("/api/categories/getCategories", async (req: Request, res: Response) => {
            await categoryController.getAll(res);
        })
    }

    public MapRoutes(): Router {
        this.DefineRoutes();
        return this.router;
    }
}