import React from 'react';
import {Header, Title, Wrapper} from "./styledComponents";
import {useSelector} from "react-redux";
import InfoItem from "./components/infoItem";

const Variables = () => {
    const state = useSelector(state => state.state);

    return (
        <Wrapper>
            <Header>
                <Title>
                    {state.currentDecodeVinInfo.VIN}
                </Title>
            </Header>
            {
                state.currentDecodeVinInfo.decodeVin.map(item => {
                    return (
                        <InfoItem key={item.VariableId} item={item}/>
                    )
                })
            }
        </Wrapper>
    );
};

export default Variables;