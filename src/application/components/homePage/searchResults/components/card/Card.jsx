import React from 'react';
import {
    Title,
    Header,
    Wrapper,
    OpenButton,
} from "./styledComponents";
import {useDispatch} from "react-redux";
import {setCurrentDecodeVinInfo} from "../../../../../../redux/reducer";
import {NavLink} from "react-router-dom";

const Card = props => {
    const {vinInfo} = props;
    const dispatch = useDispatch();

    const handleClickOnButton = () => {
        dispatch(setCurrentDecodeVinInfo(vinInfo));
    };

    return (
        <Wrapper>
            <Header>
                <Title>
                    {vinInfo.VIN}
                </Title>
                <NavLink to='/variables'>
                    <OpenButton onClick={handleClickOnButton}>
                        Open decode VIN
                    </OpenButton>
                </NavLink>
            </Header>
        </Wrapper>
    );
};

export default Card;