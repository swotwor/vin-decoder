import {createStore, combineReducers} from "redux";
import {questionnaireReducer} from "./reducer";

const rootReducer = combineReducers({
    state: questionnaireReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());