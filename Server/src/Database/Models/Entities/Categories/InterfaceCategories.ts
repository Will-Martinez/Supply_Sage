import { Optional } from "sequelize";

export interface CategoriesAttr {
    id: number,
    name: string,
    description: string
}

export interface CategoryCreationAttr extends Optional<CategoriesAttr, "id">{};