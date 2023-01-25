import React, {useState} from 'react';
import {
    Title,
    Header,
    Wrapper,
    OpenButton,
} from "./styledComponents";
import InfoItem from "./components/infoItem";
import arrowIcon from './../../../../../assets/termsIcon.svg'

const Card = props => {
    const {vinInfo} = props;
    const [isOpenFullList, setIsOpenFullList] = useState(false);

    return (
        <Wrapper>
            <Header>
                <Title>
                    {vinInfo.VIN}
                </Title>
                <OpenButton
                    onClick={() => setIsOpenFullList(prevState => !prevState)}
                    arrowIcon={arrowIcon}
                    isOpenFullList={isOpenFullList}
                />
            </Header>
            {
                isOpenFullList
                    ? vinInfo.decodeVin.map(item => {
                        return (
                            <InfoItem key={item.VariableId} item={item}/>
                        )
                    })
                    : vinInfo.decodeVin.slice(0, 5).map(item => {
                        return (
                            <InfoItem key={item.VariableId} item={item}/>
                        )
                    })
            }
        </Wrapper>
    );
};

export default Card;