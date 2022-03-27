import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components'
import { COLORS } from '../../constants/colors';
import Label from './label';

interface FieldInterface {
    label: string;
    placeholder: string;
    onChange?: Function;
    containerStyling?: CSSProperties
}

let TextInputField: FC<FieldInterface> = (props) => {
    return (
        <Container style={{...props.containerStyling}}>
            <Label
                value={props.label}
            />
            <TextFieldContainer>
                <Input 
                    type="text"
                    placeholder={props.placeholder}
                    onChange={(event)=> {if(props.onChange)props.onChange(event.target.value)}}
                />
            </TextFieldContainer>
        </Container>
    );
}

let Container = styled.div`
    max-width: 300px;
`;

let TextFieldContainer = styled.div`
    background-color: ${COLORS.lightGrey};
    max-width: 300px;
    border-radius: 10px;
    padding: 10px 20px;
`;

let Input = styled.input`
    width: 100%;
    height: 100%;
    font-size: 16px;
    background-color: transparent;    
    color: ${COLORS.grey};
    border-style: none;
    padding-left: 10px;
    &:focus {
        outline: 0;
    }
`;

export default TextInputField;