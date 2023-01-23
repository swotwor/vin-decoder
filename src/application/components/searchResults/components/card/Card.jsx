import React, {useState} from 'react';
import {
    Title,
    Header,
    Wrapper,
    VinInfoName,
    VinInfoValue,
    VinInfoContainer,
} from "./styledComponents";
import ExtendedDescriptionsWindow from "./components/infoItem/components/extendedDescriptionsWindow";
import InfoItem from "./components/infoItem";

const Card = props => {
    const {vinInfo} = props;
    console.log(vinInfo);
    const [isOpenFullList, setIsOpenFullList] = useState(false);
    const [isOpenExtendedDescription, setIsOpenExtendedDescription] = useState(false);

    const handleOnContainerClick = (event) => {
        setIsOpenExtendedDescription(prevState => !prevState);
        console.log('HOVER')
        event.stopPropagation();
        event.preventDefault();
    };

    return (
        <Wrapper onClick={() => setIsOpenFullList(prevState => !prevState)}>
            <Header>
                <Title>
                    {vinInfo.VIN}
                </Title>

                {
                    vinInfo.decodeVin.map((item, index) => {
                        return (
                            <InfoItem key={index} item={item}/>
                        )
                    })
                }



                {/*{isOpenFullList*/}
                {/*    ? vinInfo.decodeVin.map((item, index) => {*/}
                {/*            return (*/}
                {/*                <VinInfoContainer*/}
                {/*                    key={index}*/}
                {/*                >*/}
                {/*                    <VinInfoName*/}
                {/*                        onClick={() => setIsOpenExtendedDescription(prevState => !prevState)}*/}
                {/*                    >*/}
                {/*                        {item.Variable}*/}
                {/*                    </VinInfoName>*/}
                {/*                    {' ' + '-' + ' '}*/}
                {/*                    <VinInfoValue>*/}
                {/*                        {item.Value}*/}
                {/*                    </VinInfoValue>*/}
                {/*                    {*/}
                {/*                        isOpenExtendedDescription*/}
                {/*                            ? <ExtendedDescriptionsWindow decodeID={item.VariableId}/>*/}
                {/*                            : null*/}
                {/*                    }*/}
                {/*                </VinInfoContainer>*/}
                {/*            )*/}
                {/*        })*/}
                {/*    : vinInfo.decodeVin.map((item, index) => {*/}
                {/*            console.log(item)*/}
                {/*            console.log(vinInfo.decodeVin.slice(0,5))*/}
                {/*            return (*/}
                {/*                <VinInfoContainer key={index}>*/}
                {/*                    <VinInfoName*/}
                {/*                        onClick={() => setIsOpenExtendedDescription(prevState => !prevState)}*/}
                {/*                    >*/}
                {/*                        {item.Variable}*/}
                {/*                    </VinInfoName>*/}
                {/*                    {' ' + '-' + ' '}*/}
                {/*                    <VinInfoValue>*/}
                {/*                        {item.Value}*/}
                {/*                    </VinInfoValue>*/}
                {/*                    {*/}
                {/*                        isOpenExtendedDescription*/}
                {/*                            ? <ExtendedDescriptionsWindow decodeID={item.VariableId}/>*/}
                {/*                            : null*/}
                {/*                    }*/}
                {/*                </VinInfoContainer>*/}
                {/*            )*/}
                {/*        })*/}
                {/*}*/}
            </Header>
        </Wrapper>
    );
};

export default Card;