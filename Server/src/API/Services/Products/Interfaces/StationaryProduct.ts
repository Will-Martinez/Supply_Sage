export default abstract class StationaryProduct {
    protected category: string;
    protected productName: string;
    protected amount: number;
    protected price: number;
    protected available: boolean;
    abstract getCategory(): string;
    abstract toDatabaseObject(): object;
}