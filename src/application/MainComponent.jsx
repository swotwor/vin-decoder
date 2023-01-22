import React from 'react';
import Header from "./components/header";
import InputForm from "./components/inputForm";
import SearchResults from "./components/searchResults";
import {
    Wrapper,
    InnerContent,
} from "./styledComponents";
import {useDispatch, useSelector} from "react-redux";
import {setVehicleVariablesList} from "../redux/reducer";
import {getVehicleVariablesList} from "../redux/logic";

const MainComponent = () => {
    const state = useSelector(state => state.state);
    const dispatch = useDispatch();

    React.useEffect(() => {
        getVehicleVariablesList(
            dispatch(setVehicleVariablesList())
        )
        console.log('MainComponent');
    },[])

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