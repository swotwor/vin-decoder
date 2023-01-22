import React from 'react';
import {getSearchResult} from "../../../redux/logic";
import {useDispatch, useSelector} from "react-redux";
import {addedResult, setSearchInput} from "../../../redux/reducer";
import {
    Input,
    Button,
    Wrapper,
} from "./styledComponents";

const InputForm = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.state);
    const setAddedResult = payload => dispatch(addedResult(payload))

    const clickOnSearchButton = () => {
        getSearchResult(state.searchInput, setAddedResult)
    };

    return (
        <Wrapper>
            <Input
                onChange={event => dispatch(setSearchInput(event.target.value))}
                value={state.searchInput}
                maxLength={17}
            />
            <Button onClick={() => clickOnSearchButton()}>
                Search
            </Button>
        </Wrapper>
    );
};

export default InputForm;