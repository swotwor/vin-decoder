import React from 'react';
import {
    VinInfoName,
    VinInfoValue,
    VinInfoContainer,
} from "./styledComponents";
import ExtendedDescriptionsWindow from "./components/extendedDescriptionsWindow";

const InfoItem = props => {
    const {
        item,
    } = props;

    return (
        <VinInfoContainer >
            <VinInfoName
                // onClick={() => setIsOpenExtendedDescription(prevState => !prevState)}
            >
                {item.Variable}
            </VinInfoName>
            {' ' + '-' + ' '}
            <VinInfoValue>
                {item.Value}
            </VinInfoValue>
            <ExtendedDescriptionsWindow decodeID={item.VariableId}/>
            {/*{*/}
            {/*    isOpenExtendedDescription*/}
            {/*        ?
            {/*        : null*/}
            {/*}*/}
        </VinInfoContainer>
    );
};

export default InfoItem;