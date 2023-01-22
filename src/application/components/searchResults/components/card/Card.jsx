import React, {useState} from 'react';
import {
    Title,
    Header,
    Wrapper,
    VinInfoName,
    VinInfoValue,
    VinInfoContainer,
} from "./styledComponents";
import ExtendedDescriptionsWindow from "./components/extendedDescriptionsWindow";

const Card = ({vinInfo}) => {
    const [isOpenFullList, setIsOpenFullList] = useState(false);
    const [isOpenExtendedDescription, setIsOpenExtendedDescription] = useState(false);

    const handleHover = event => {
        setIsOpenExtendedDescription(prevState => !prevState);
        event.preventDefault();
        event.stopPropagation();
    }

    return (
        <Wrapper onClick={() => setIsOpenFullList(prevState => !prevState)}>
            <Header>
                <Title>
                    {vinInfo.VIN}
                </Title>
                {
                    isOpenFullList
                    ? vinInfo.decodeVin.map((item, index) => {
                            return (
                                <VinInfoContainer
                                    key={index}
                                >
                                    <VinInfoName
                                        onMouseEnter={handleHover}
                                        onMouseLeave ={handleHover}
                                    >
                                        {item.Variable}
                                    </VinInfoName>
                                    {' ' + '-' + ' '}
                                    <VinInfoValue>
                                        {item.Value}
                                    </VinInfoValue>
                                    {
                                        isOpenExtendedDescription
                                            ? <ExtendedDescriptionsWindow decodeID={item.VariableId}/>
                                            : null
                                    }
                                </VinInfoContainer>
                            )
                        })
                    : vinInfo.decodeVin.slice(0,5).map((item, index) => {
                            console.log(item)
                            return (
                                <VinInfoContainer key={index}>
                                    <VinInfoName
                                        onMouseEnter={() => setIsOpenExtendedDescription(prevState => !prevState)}
                                        onMouseLeave ={() => setIsOpenExtendedDescription(prevState => !prevState)}
                                    >
                                        {item.Variable}
                                    </VinInfoName>
                                    {' ' + '-' + ' '}
                                    <VinInfoValue>
                                        {item.Value}
                                    </VinInfoValue>
                                    {
                                        isOpenExtendedDescription
                                            ? <ExtendedDescriptionsWindow decodeID={item.VariableId}/>
                                            : null
                                    }
                                </VinInfoContainer>
                            )
                        })
                }
            </Header>
        </Wrapper>
    );
};

export default React.memo(Card);