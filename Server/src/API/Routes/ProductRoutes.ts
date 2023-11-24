import express, { Request, Response, Router } from "express";
import ProductController from "../Controllers/Products/ProductController";

const productController: ProductController = new ProductController();

export default class ProductRoutes {

    private local: string = "[ PRODUCT-ROUTES ]";
    private router: Router = express.Router();

    private DefineRoutes(): void {

        this.router.post("/products", async(req: Request, res: Response) => {
            const result = await productController.create(req.body);
            res.status(200).json({ message: "Created.", result: result})
        });
    }

    public MapRoutes(): Router {
        this.DefineRoutes();
        return this.router;
    }
}