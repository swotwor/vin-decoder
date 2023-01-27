import React from 'react';
import {
    Wrapper,
} from "./styledComponents";
import {useSelector} from "react-redux";

const AboutVariables = () => {
    const state = useSelector(state => state.state);

    return (
        <Wrapper>
            {state.vehicleVariablesList[state.currentAboutVariableId]}
        </Wrapper>
    );
};

export default AboutVariables;