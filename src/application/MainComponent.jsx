import React from 'react';
import Header from "./components/header";
import InputForm from "./components/inputForm";
import SearchResults from "./components/searchResults";
import {
    useSelector,
    useDispatch,
} from "react-redux";
import {setVehicleVariablesList} from "../redux/reducer";
import {getVehicleVariablesList} from "../redux/logic";
import {
    Wrapper,
    InnerContent,
} from "./styledComponents";

const MainComponent = () => {
    const state = useSelector(state => state.state);
    const dispatch = useDispatch();
    const vehicleVariablesList = payload => dispatch(setVehicleVariablesList(payload));

    React.useEffect(() => {
        getVehicleVariablesList(vehicleVariablesList);
    },[]);

    return (
        <Wrapper>
            <InnerContent>
                <Header/>
                <InputForm/>
                {state.arrayWithFoundList.length ? <SearchResults/> : null}
            </InnerContent>
        </Wrapper>
    );
};

export default MainComponent;