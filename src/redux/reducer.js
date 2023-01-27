import {defaultState} from "./state";

export const questionnaireReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADDED_RESULT':
            return {
                ...state,
                arrayWithFoundList: [action.payload, ...state.arrayWithFoundList].slice(0, 5),
            };
        case 'GET_VEHICLE_VARIABLES_LIST':
            return {
                ...state,
                vehicleVariablesList: {...action.payload},
            };
        case 'SET_CURRENT_DECODE_VIN_INFO':
            return {
                ...state,
                currentDecodeVinInfo: {...action.payload},
            };
        case 'SET_CURRENT_ABOUT_VARIABLE_ID':
            return {
                ...state,
                currentAboutVariableId: action.payload,
            };
        default:
            return state;
    }
};

export const addedResult = payload => ({type: 'ADDED_RESULT', payload});
export const setCurrentDecodeVinInfo = payload => ({type: 'SET_CURRENT_DECODE_VIN_INFO', payload});
export const setVehicleVariablesList = payload => ({type: 'GET_VEHICLE_VARIABLES_LIST', payload});
export const setCurrentAboutVariableId = payload => ({type: 'SET_CURRENT_ABOUT_VARIABLE_ID', payload});
