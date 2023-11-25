import express, { Request, Response, Router } from "express";
import ProductController from "../Controllers/Products/ProductController";

const productController: ProductController = new ProductController();

export default class ProductRoutes {

    private local: string = "[ PRODUCT-ROUTES ]";
    private router: Router = express.Router();

    private DefineRoutes(): void {

        this.router.post("/api/products/createProducts", async(req: Request, res: Response) => {
            await productController.store(req.body, res);
        });

        this.router.get("/api/products/getProducts", async(req: Request, res: Response) => {
            return await productController.getAll(res);
        });

        this.router.put("/api/products/updateProduct/:id", async (req: Request, res: Response) => {
            await productController.updateProduct(req.body, req.params.id, res);
        });

        this.router.delete("/api/products/deleteProduct/:id", async (req: Request, res: Response) => {
            await productController.deleteProduct(req.params.id, res);
        });
    }

    public MapRoutes(): Router {
        this.DefineRoutes();
        return this.router;
    }
}