import StationaryProduct from "./StationaryProduct";

export default abstract class StationaryFactory {
    abstract createProduct(...args: any[]): StationaryProduct
}