import React from 'react';
import {useSelector} from "react-redux";
import {Wrapper} from "./styledComponents";

const ExtendedDescriptionsWindow = props => {
    const {
        decodeID,
        handleHoverOnNameVariable,
    } = props;
    const state = useSelector(state => state.state);

    return (
        <Wrapper onClick={() => handleHoverOnNameVariable()}>
            {state.vehicleVariablesList[decodeID]}
        </Wrapper>
    );
};

export default ExtendedDescriptionsWindow;