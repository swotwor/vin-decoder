import React from 'react';
import {useSelector} from "react-redux";
import {Wrapper} from "./styledComponents";

const ExtendedDescriptionsWindow = props => {
    const {
        decodeID,
        handleHoverOnNameVariable,
    } = props;
    const state = useSelector(state => state.state);

    function createMarkup(description) {
        return {__html: description};
      }
      
    return (
        <Wrapper onClick={() => handleHoverOnNameVariable()}>
            <div dangerouslySetInnerHTML={createMarkup(state.vehicleVariablesList[decodeID])} />
        </Wrapper>
    );
};

export default ExtendedDescriptionsWindow;