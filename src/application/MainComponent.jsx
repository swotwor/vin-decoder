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
                    <Route exact path="swotwor.github.io/vinDecoderBuild/" element={<HomePage/>}/>
                    <Route exact path="swotwor.github.io/vinDecoderBuild/variables" element={<Variables/>}/>
                    <Route exact path="swotwor.github.io/vinDecoderBuild/variables/aboutVariables" element={<AboutVariables/>}/>
                </Routes>
            </InnerContent>
        </Wrapper>
    );
};

export default MainComponent;