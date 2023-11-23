import { Optional } from "sequelize"

export interface ProductsAttr {
    id: number,
    categoryId: number,
    productName: string,
    amount: number,
    price: number,
    available: boolean
}

export interface ProductCreationAttr extends Optional<ProductsAttr, "id">{};