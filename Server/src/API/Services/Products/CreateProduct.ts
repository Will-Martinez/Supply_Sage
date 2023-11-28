import StationaryProduct from "./Interfaces/StationaryProduct";
import SchoolSupplyFactory from "./ConcreteFactories/SchoolSupplyFactory";
import OfficeSupplyFactory from "./ConcreteFactories/OfficeSupplyFactory";
import ArtsCraftFactory from "./ConcreteFactories/ArtsCraftFactory";
import TechnicalMaterialFactory from "./ConcreteFactories/TechnicalMaterialFactory";
import FineStationaryFactory from "./ConcreteFactories/FineStationaryFactory";
import OrganizationFactory from "./ConcreteFactories/OrganizationFactory";
import WritingCorrectionFactory from "./ConcreteFactories/WritingCorrectionFactory";
import StationaryFactory from "./Interfaces/StationaryFactory";

export default class CreateProduct {

    private defineProductCreation(): object {
        return {
            "School Supply": new SchoolSupplyFactory() ,
            "Office Supply": new OfficeSupplyFactory,
            "Arts and Crafts": new ArtsCraftFactory,
            "Technical Material": new TechnicalMaterialFactory,
            "Fine Stationery": new FineStationaryFactory(),
            "Organization": new OrganizationFactory(),
            "Writing and Correction": new WritingCorrectionFactory()
        }
    }

    public create(
        category: string,
        productName: string,
        amount: number,
        price: number,
        available: boolean
    ): StationaryProduct {
        const factoryDefinition: object = this.defineProductCreation();
        const concreteFactory: StationaryFactory = factoryDefinition[category];
        return concreteFactory.createProduct(category, productName, amount, price, available);
    }
}