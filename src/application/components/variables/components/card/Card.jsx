import React from 'react';
import {
    Title,
    Header,
    Wrapper,
} from "./styledComponents";
import InfoItem from "../infoItem";

const Card = props => {
    const {vinInfo} = props;

    return (
        <Wrapper>
            <Header>
                <Title>
                    {vinInfo.VIN}
                </Title>
            </Header>
            {
                vinInfo.decodeVin.map(item => {
                    return (
                        <InfoItem key={item.VariableId} item={item}/>
                    )
                })
            }
        </Wrapper>
    );
};

export default Card;