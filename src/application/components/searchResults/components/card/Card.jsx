import React from 'react';
import {
    Title,
    Header,
    Wrapper,
    VinInfoName,
    VinInfoValue,
    VinInfoContainer,
} from "./styledComponents";

const Card = ({vinInfo}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    console.log(vinInfo);

    return (
        <Wrapper onClick={() => setIsOpen(prevState => !prevState)}>
            <Header>
                <Title>
                    {vinInfo.VIN}
                </Title>
                {
                    isOpen
                    ? vinInfo.decodeVin.map((item, index) => {
                            return (
                                <VinInfoContainer key={index}>
                                    <VinInfoName>
                                        {item.Variable}
                                    </VinInfoName>
                                    {' ' + '-' + ' '}
                                    <VinInfoValue>
                                        {item.Value}
                                    </VinInfoValue>
                                </VinInfoContainer>
                            )
                        })
                    : vinInfo.decodeVin.slice(0,5).map((item, index) => {
                            return (
                                <VinInfoContainer key={index}>
                                    <VinInfoName>
                                        {item.Variable}
                                    </VinInfoName>
                                    {' ' + '-' + ' '}
                                    <VinInfoValue>
                                        {item.Value}
                                    </VinInfoValue>
                                </VinInfoContainer>
                            )
                        })
                }
            </Header>
        </Wrapper>
    );
};

export default React.memo(Card);