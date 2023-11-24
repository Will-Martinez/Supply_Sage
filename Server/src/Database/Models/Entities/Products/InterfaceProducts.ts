import { Optional } from "sequelize"

export interface ProductsAttr {
    id: number,
    category: string,
    productName: string,
    amount: number,
    price: number,
    available: boolean
}

export interface ProductCreationAttr extends Optional<ProductsAttr, "id"> {};