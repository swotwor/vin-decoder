import React from 'react';
import {useDispatch} from "react-redux";
import {addedResult} from "../../../redux/reducer";
import {getSearchResult} from "../../../redux/logic";
import {
    Input,
    Button,
    Wrapper,
} from "./styledComponents";

const InputForm = () => {
    const dispatch = useDispatch();
    const setAddedResult = payload => dispatch(addedResult(payload));
    const [currentSearchVIN, setCurrentSearchVIN] = React.useState('');
    const isButtonActive = currentSearchVIN.length > 0;

    const clickOnSearchButton = () => {
        if (isButtonActive) {
            getSearchResult(currentSearchVIN, setAddedResult);
            setCurrentSearchVIN('');
        }
    };
    const onChangInput = event => {
        setCurrentSearchVIN(event.target.value);
    };

    return (
        <Wrapper>
            <Input
                value={currentSearchVIN}
                onChange={onChangInput}
                maxLength={17}
                placeholder={'Enter vin-code'}
            />
            <Button
                onClick={() => clickOnSearchButton()}
                isButtonActive={isButtonActive}
            >
                Search
            </Button>
        </Wrapper>
    );
};

export default InputForm;