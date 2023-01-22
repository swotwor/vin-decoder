import React from 'react';
import {
    Wrapper,
} from "./styledComponents";
import {useSelector} from "react-redux";
import Card from "./components/card";

const SearchResults = () => {
    const state = useSelector(state => state.state);

    return (
        <Wrapper>
            {state.arrayWithFoundList.map((vinInfo, index) => {
                    return (
                        <Card key={index} vinInfo={vinInfo}/>
                    )
                })
            }
        </Wrapper>
    );
};

export default SearchResults;