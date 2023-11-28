import StationaryFactory from "./StationaryFactory";
import SchoolSupplyFactory from "../ConcreteFactories/SchoolSupplyFactory";
import OfficeSupplyFactory from "../ConcreteFactories/OfficeSupplyFactory";
import ArtsCraftFactory from "../ConcreteFactories/ArtsCraftFactory";
import TechnicalMaterialFactory from "../ConcreteFactories/TechnicalMaterialFactory";
import FineStationaryFactory from "../ConcreteFactories/FineStationaryFactory";
import OrganizationFactory from "../ConcreteFactories/OrganizationFactory";
import WritingCorrectionFactory from "../ConcreteFactories/WritingCorrectionFactory";

export default class DefineFactory {

    private mapCategories(): object {
        return {
            "School Supply": new SchoolSupplyFactory(),
            "Office Supply": new OfficeSupplyFactory(),
            "Arts and Crafts": new ArtsCraftFactory(),
            "Technical Material": new TechnicalMaterialFactory(),
            "Fine Stationery": new FineStationaryFactory(),
            "Organization": new OrganizationFactory(),
            "Writing and Correction": new WritingCorrectionFactory()
        }
    }

    public returnConcreteFactory(category: string): StationaryFactory {
        const factoriesMap: object = this.mapCategories();
        const concreteFactory: StationaryFactory = factoriesMap[category];
        return concreteFactory;
    }
}