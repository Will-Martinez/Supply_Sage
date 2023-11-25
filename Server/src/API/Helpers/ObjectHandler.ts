export default class ObjectHandler {

    static isArrayNotEmpty(array: any[]) {
        return Array.isArray(array) && array.length > 0;
    }

    static isObjectNotEmpty(object: object) {
        return Object.keys(object).length > 0 && Object.keys(object) != undefined
    }
}