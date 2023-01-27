import React, {useState} from 'react';
import {
    Title,
    Header,
    Wrapper, OpenButton,
} from "./styledComponents";
import InfoItem from "../infoItem";
import arrowIcon from './../../../../../assets/termsIcon.svg'

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