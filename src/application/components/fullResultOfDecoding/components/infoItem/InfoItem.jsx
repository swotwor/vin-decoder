import React, {useState} from 'react';
import {
    Help,
    VinInfoName,
    VinInfoValue,
    VinInfoNameBox,
    VinInfoContainer,
} from "./styledComponents";
import ExtendedDescriptionsWindow from "./components/extendedDescriptionsWindow";

const InfoItem = props => {
    const {
        item,
    } = props;
    const [isOpenExtendedDescription, setIsOpenExtendedDescription] = useState(false);

    const handleHoverOnNameVariable = () => {
        setIsOpenExtendedDescription(prevState => !prevState);
    };

    return (
        <VinInfoContainer>
            <VinInfoNameBox>
                <VinInfoName>
                    {item.Variable}
                </VinInfoName>
                <Help onClick={handleHoverOnNameVariable}>
                    ?
                </Help>
            </VinInfoNameBox>
            <VinInfoValue>
                {item.Value}
            </VinInfoValue>
            {
                isOpenExtendedDescription
                    ? <ExtendedDescriptionsWindow decodeID={item.VariableId}
                                                  handleHoverOnNameVariable={handleHoverOnNameVariable}/>
                    : null
            }
        </VinInfoContainer>
    );
};

export default InfoItem;