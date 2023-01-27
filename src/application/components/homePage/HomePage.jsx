import React from 'react';
import {
    Wrapper,
} from "./styledComponents";
import Header from "./header";
import InputForm from "./inputForm";
import {useSelector} from "react-redux";
import SearchResults from "./searchResults";

const HomePage = () => {
    const state = useSelector(state => state.state);

    return (
        <Wrapper>
            <Header/>
            <InputForm/>
            {state.arrayWithFoundList.length ? <SearchResults/> : null}
        </Wrapper>
    );
};

export default React.memo(HomePage);