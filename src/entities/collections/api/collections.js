import entities from './entities.json';
const { collections, types } = entities;
export class collectionsApi {
    getAllCollections(){
        return collections
    }
    getCities(){
        return collections.cities;
    }
    getWorkShops(parentId){
        return collections.workshops.filter((workshop) => workshop.cityId === parentId);
    }
    getEmployees(parentId){
        return collections.employees.filter((employee) => employee.workshopId === parentId);
    }
    getBrigade(){
        return collections.brigades;
    }
    getShifts(){
        return collections.shifts;
    }
    getTypes(){
        return types;
    }
}

