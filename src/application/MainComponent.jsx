import React from 'react';
import HomePage from "./components/homePage";
import Variables from "./components/variables";
import {useDispatch} from "react-redux";
import AboutVariables from "./components/aboutVariables";
import {setVehicleVariablesList} from "../redux/reducer";
import {getVehicleVariablesList} from "../redux/logic";
import {
    Wrapper,
    InnerContent,
} from "./styledComponents";
import {
    Route,
    Routes,
} from "react-router-dom";

const MainComponent = () => {
    const dispatch = useDispatch();
    const vehicleVariablesList = payload => dispatch(setVehicleVariablesList(payload));

    React.useEffect(() => {
        getVehicleVariablesList(vehicleVariablesList);
    }, []);

    return (
        <Wrapper>
            <InnerContent>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route exact path="/variables" element={<Variables/>}/>
                    <Route exact path="/variables/aboutVariables" element={<AboutVariables/>}/>
                </Routes>
            </InnerContent>
        </Wrapper>
    );
};

export default MainComponent;