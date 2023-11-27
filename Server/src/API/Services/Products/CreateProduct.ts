import StationaryProduct from "./Interfaces/StationaryProduct";
import SchoolSupplyFactory from "./ConcreteFactories/SchoolSupplyFactory";
import OfficeSupplyFactory from "./ConcreteFactories/OfficeSupplyFactory";
import ArtsCraftFactory from "./ConcreteFactories/ArtsCraftFactory";
import TechnicalMaterialFactory from "./ConcreteFactories/TechnicalMaterialFactory";
import FineStationaryFactory from "./ConcreteFactories/FineStationaryFactory";
import OrganizationFactory from "./ConcreteFactories/OrganizationFactory";
import WritingCorrectionFactory from "./ConcreteFactories/WritingCorrectionFactory";

export default class CreateProduct {

    private createSchoolSupply(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean
    ): StationaryProduct {
        const schoolSupplyFactory: SchoolSupplyFactory = new SchoolSupplyFactory();
        return schoolSupplyFactory.createProduct(
            category,
            productName,
            amount,
            price,
            available
        );
    }

    private createOfficeSupply(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean
    ): StationaryProduct {
        const officeSupplyFactory: OfficeSupplyFactory = new OfficeSupplyFactory();
        return officeSupplyFactory.createProduct(
            category,
            productName,
            amount,
            price,
            available
        );
    }

    private createArtsCrafts(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean
    ): StationaryProduct {
        const artsCraftFactory: ArtsCraftFactory = new ArtsCraftFactory();
        return artsCraftFactory.createProduct(
            category,
            productName,
            amount,
            price,
            available
        );
    }

    private createTechnicalMaterial(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean
    ): StationaryProduct {
        const technicalMaterialFactory: TechnicalMaterialFactory = new TechnicalMaterialFactory();
        return technicalMaterialFactory.createProduct(
            category,
            productName,
            amount,
            price,
            available
        );
    }

    private createFineStationary(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean
    ): StationaryProduct {
        const fineStationaryFactory: FineStationaryFactory = new FineStationaryFactory();
        return fineStationaryFactory.createProduct(
            category,
            productName,
            amount,
            price,
            available
        );
    }

    private createOrganization(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean
    ): StationaryProduct {
        const organizationFactory: OrganizationFactory = new OrganizationFactory();
        return organizationFactory.createProduct(
            category,
            productName,
            amount,
            price,
            available
        );
    }

    private createWritingCorrection(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean
    ): StationaryProduct {
        const writingCorrection: WritingCorrectionFactory = new WritingCorrectionFactory();
        return writingCorrection.createProduct(
            category,
            productName,
            amount,
            price,
            available
        )
    }

    private defineProductCreation(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean
    ): object {
        return {
            "School Supply": this.createSchoolSupply(
                category,
                productName,
                amount,
                price,
                available
            ),
            "Office Supply": this.createOfficeSupply(
                category,
                productName,
                amount,
                price,
                available
            ),
            "Arts and Crafts": this.createArtsCrafts(
                category,
                productName,
                amount,
                price,
                available
            ),
            "Technical Material": this.createTechnicalMaterial(
                category,
                productName,
                amount,
                price,
                available
            ),
            "Fine Stationery": this.createFineStationary(
                category,
                productName,
                amount,
                price,
                available
            ),
            "Organization": this.createOrganization(
                category,
                productName,
                amount,
                price,
                available
            ),
            "Writing and Correction": this.createWritingCorrection(
                category,
                productName,
                amount,
                price,
                available
            )
        }
    }

    public create(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean
    ): StationaryProduct {
        const productCreation: object = this.defineProductCreation(
            category,
            productName,
            amount,
            price,
            available
        );
        return productCreation[category];
    }
}