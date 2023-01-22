import axios from 'axios';

export const getSearchResult = async (vinNumber, setAddedResult) => {
    await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vinNumber}?format=json`)
        .then(function (response) {
            // setAddedResult(response.data.Results);
            filteredResult(response.data, setAddedResult);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
};

export const getVehicleVariablesList = async (setVehicleVariablesList) => {
    await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`)
        .then(function (response) {
            // setAddedResult(response.data.Results);
            filteredVehicleVariablesList(response.Results, setVehicleVariablesList);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}

const filteredResult = (someResult, setAddedResult) => {
    const temporaryStorage = {
        VIN: '',
        decodeVin: [],
    };
    console.log(someResult.SearchCriteria);
    temporaryStorage.VIN = someResult.SearchCriteria;
    someResult.Results.map(item => {
        if (item.Value) {
            temporaryStorage['decodeVin'].push(item)
        }
    });
    setAddedResult(temporaryStorage);
};

const filteredVehicleVariablesList = (variablesLists, setVehicleVariablesList) => {
    const newVariablesList = {};
    variablesLists.map(item => {
        newVariablesList[item.ID] = item.Description
    })
    setVehicleVariablesList(newVariablesList);
};