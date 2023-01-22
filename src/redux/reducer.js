import {defaultState} from "./state";

export const questionnaireReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADDED_RESULT':
            return {
                ...state,
                arrayWithFoundList: [action.payload, ...state.arrayWithFoundList].slice(0, 5),
            };
        case 'SET_SEARCH_INPUT':
            return {
                ...state,
                searchInput: action.payload,
            };
        case 'GET_VEHICLE_VARIABLES_LIST':
            return {
                ...state,
                vehicleVariablesList: {...action.payload},
            };
        default:
            return state;
    }
};

export const addedResult = payload => ({type: 'ADDED_RESULT', payload});
export const setSearchInput = payload => ({type: 'SET_SEARCH_INPUT', payload});
export const setVehicleVariablesList = payload => ({type: 'GET_VEHICLE_VARIABLES_LIST', payload});
