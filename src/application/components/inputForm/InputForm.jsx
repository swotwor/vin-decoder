import React from "react";
import { useDispatch } from "react-redux";
import { addedResult } from "../../../redux/reducer";
import { getSearchResult } from "../../../redux/logic";
import { Input, Button, Wrapper, FormContainer } from "./styledComponents";

const InputForm = () => {
    const dispatch = useDispatch();
    const setAddedResult = (payload) => dispatch(addedResult(payload));
    const [currentSearchVIN, setCurrentSearchVIN] = React.useState("");
    const isButtonActive = currentSearchVIN.length > 0;

    const clickOnSearchButton = (e) => {
        e.preventDefault();
        if (isButtonActive) {
            getSearchResult(currentSearchVIN, setAddedResult);
            setCurrentSearchVIN("");
        }
    };
    const onChangInput = (event) => {
        setCurrentSearchVIN(event.target.value);
    };

    return (
        <Wrapper>
            <FormContainer onSubmit={clickOnSearchButton}>
                <Input
                    name="vin"
                    value={currentSearchVIN}
                    onChange={onChangInput}
                    maxLength={17}
                    placeholder={"Enter vin-code"}
                />
                <Button
                    type="submit"
                    isButtonActive={isButtonActive}
                >
                    Search
                </Button>
            </FormContainer>
        </Wrapper>
    );
};

export default InputForm;
