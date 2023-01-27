import React from 'react';
import {
    Help,
    VinInfoName,
    VinInfoValue,
    VinInfoNameBox,
    VinInfoContainer,
} from "./styledComponents";
import {useDispatch} from "react-redux";
import {setCurrentAboutVariableId} from "../../../../../redux/reducer";
import {NavLink} from "react-router-dom";

const InfoItem = props => {
    const {
        item,
    } = props;
    const dispatch = useDispatch();

    const handleHoverOnNameVariable = () => {
        dispatch(setCurrentAboutVariableId(item.VariableId));
    };

    return (
        <VinInfoContainer>
            <VinInfoNameBox>
                <VinInfoName>
                    {item.Variable}
                </VinInfoName>
                <NavLink to={'/variables/aboutVariables'}>
                    <Help onClick={handleHoverOnNameVariable}>
                        ?
                    </Help>
                </NavLink>
            </VinInfoNameBox>
            <VinInfoValue>
                {item.Value}
            </VinInfoValue>
        </VinInfoContainer>
    );
};

export default InfoItem;