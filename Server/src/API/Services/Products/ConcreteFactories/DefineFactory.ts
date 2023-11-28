import StationaryFactory from "../Interfaces/StationaryFactory";
import SchoolSupplyFactory from "./Factories/SchoolSupplyFactory";
import OfficeSupplyFactory from "./Factories/OfficeSupplyFactory";
import ArtsCraftFactory from "./Factories/ArtsCraftFactory";
import TechnicalMaterialFactory from "./Factories/TechnicalMaterialFactory";
import FineStationaryFactory from "./Factories/FineStationaryFactory";
import OrganizationFactory from "./Factories/OrganizationFactory";
import WritingCorrectionFactory from "./Factories/WritingCorrectionFactory";

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