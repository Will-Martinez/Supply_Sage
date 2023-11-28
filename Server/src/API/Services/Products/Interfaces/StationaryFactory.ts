import StationaryProduct from "./StationaryProduct";

export default abstract class StationaryFactory {
    abstract createConcreteProduct(...args: any[]): StationaryProduct
}