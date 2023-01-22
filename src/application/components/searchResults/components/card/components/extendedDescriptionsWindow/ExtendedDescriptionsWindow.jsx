import React from 'react';
import {useSelector} from "react-redux";
import {Wrapper} from "./styledComponents";

const ExtendedDescriptionsWindow = ({decodeID}) => {
    const state = useSelector(state => state.state);
    console.log(state.vehicleVariablesList[decodeID])

    return (

        <Wrapper>
            {state.vehicleVariablesList[decodeID]}
        </Wrapper>
    );
};

export default React.memo(ExtendedDescriptionsWindow);