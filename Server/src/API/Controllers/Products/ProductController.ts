import { ProductModel } from "../../../Database/Models/Entities/Products/Products";
import { Response } from "express";
import StationaryProduct from "../../Services/Products/Interfaces/StationaryProduct";
import CreateProduct from "../../Services/Products/CreateProduct";
import ResponseHandler from "../../Helpers/ResponseHandler";
import ObjectHandler from "../../Helpers/ObjectHandler";
import GetProducts from "../../Services/Products/GetProducts";
import UpdateProduct from "../../Services/Products/UpdateProduct";
import DeleteProduct from "../../Services/Products/DeleteProduct";

interface ProductAttr {
    category: string,
    productName: string,
    amount: number,
    price: number,
    available: boolean
}

const createProduct: CreateProduct = new CreateProduct();

export default class ProductController {

    private local: string = "[ PRODUCT-CONTROLLER ]"

    public async store(body: ProductAttr, res: Response): Promise<Response> {
        try {
            const { category, productName, amount, price, available } = body;
            const product: StationaryProduct = createProduct.create(category, productName, amount, price, available);
            const objectProduct: object = product.toDatabaseObject();
            const result: ProductModel = await ProductModel.create(objectProduct);
            const isResultValid: boolean = ObjectHandler.isObjectNotEmpty(result);
            if (isResultValid == false) {
                return ResponseHandler.ReturnResponse(
                    "Error",
                    "Failed trying to create a new product",
                    400,
                    null,
                    res
                );
            }

            return ResponseHandler.ReturnResponse(
                "Success",
                "Product created.",
                201,
                result,
                res
            );
        } catch (error) {
            console.error(`${this.local} Failed trying to create a new product: ${error.message}`);
            return ResponseHandler.ReturnResponse(
                "Error",
                `Internal server error: ${error.message}`,
                500,
                null,
                res
            );
        }
    }

    public async getAll(res: Response): Promise<Response> {
        try {
            const result: ProductModel[] = await GetProducts.findProducts();
            const isResultValid: boolean = ObjectHandler.isArrayNotEmpty(result);
            if (isResultValid == false) {
                return ResponseHandler.ReturnResponse(
                    "Error",
                    "Products not founded.",
                    404,
                    null,
                    res
                );
            }

            return ResponseHandler.ReturnResponse(
                "Success",
                "Products founded.",
                200,
                result,
                res
            );
            
        } catch (error) {
            console.error(`${this.local} Failed trying to get all products: ${error.message}`);
            return ResponseHandler.ReturnResponse(
                "Error",
                `Internal server error: ${error.message}`,
                500,
                null,
                res
            );
        }
    }

    public async updateProduct(
        body: ProductAttr,
        id: number | string,
        res: Response 
    ): Promise<Response> {
        try {
            const result = await UpdateProduct.update(id, body);
            console.log("Result updating product: ", result);
            return ResponseHandler.ReturnResponse(
                "Success",
                "Product updated.",
                200,
                result,
                res
            );
        } catch (error) {
            console.error(`${this.local} Failed trying to update product: ${error.message}`);
            return ResponseHandler.ReturnResponse(
                "Error",
                `Internal server error: ${error.message}`,
                500,
                null,
                res
            );
        }
    }

    public async deleteProduct(id: number | string, res: Response): Promise<Response> {
        try {
            const result: number = await DeleteProduct.deleteById(id);
            if (result != 1) {
                return ResponseHandler.ReturnResponse(
                    "Error",
                    "Product not founded to removal.",
                    404,
                    null,
                    res
                );
            }

            return ResponseHandler.ReturnResponse(
                "Success",
                "Product deleted.",
                200,
                null,
                res
            );
        } catch (error) {
            console.error(`${this.local} Failed trying to delete product: ${error.message}`);
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