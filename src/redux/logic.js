import axios from 'axios';
// import {vinDecode} from "../apiResult/vinDecode";
// import {variablesList} from "../apiResult/variablesList";

export const getSearchResult = async (vinNumber, setAddedResult) => {
    // filteredResult(vinDecode, setAddedResult);
    await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vinNumber}?format=json`)
        .then(function (response) {
            return filteredResult(response.data, setAddedResult);
        })
        .catch(function (error) {
            console.log(error);
        })
};

export const getVehicleVariablesList = async (setVehicleVariablesList) => {
    // setVehicleVariablesList(filteredVehicleVariablesList(variablesList.Results));
    await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`)
        .then(function (response) {
            setVehicleVariablesList(filteredVehicleVariablesList(response.data.Results));
        })
        .catch(function (error) {
            console.log(error);
        })
}

const filteredResult = (someResult, setAddedResult) => {
    const temporaryStorage = {
        VIN: '',
        decodeVin: [],
    };
    temporaryStorage.VIN = someResult.SearchCriteria;
    someResult.Results.map(item => {
        if (item.Value) {
            temporaryStorage['decodeVin'].push(item)
        }
    });
    setAddedResult(temporaryStorage);
};

const filteredVehicleVariablesList = (variablesLists) => {
    const newVariablesList = {};
    variablesLists.map(item => {
        newVariablesList[item.ID] = item.Description
    })
    return newVariablesList;
};