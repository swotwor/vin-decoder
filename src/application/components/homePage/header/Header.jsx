import React from 'react';
import {
    Line,
    Text,
    Title,
    Wrapper,
} from "./styledComponents";

const Header = () => {
    return (
        <Wrapper>
            <Title>
                VIN DECODER
            </Title>
            <Text>
                Для теста: 1FTFW1CT5DFC10312, JN1AZ4EH7DM430111
            </Text>
            <Line/>
        </Wrapper>
    );
};

export default Header;