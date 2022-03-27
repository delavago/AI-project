import React, { CSSProperties, FC, ReactElement, useState } from 'react';
import styled from 'styled-components'
import { COLORS } from '../../constants/colors';
import Label from './label';

interface DropdownFieldInterface {
    containerStyling?: CSSProperties;
    dropdownStyles?: CSSProperties;
    dropdownOptions: Array<string>;
    placeholder?: string;
    value?: string;
    onChange?: Function;
    label: string;
}

let DropdownField: FC<DropdownFieldInterface> = (props) => {
    return (
        <Container
            style={props.containerStyling}
        >
            <Label
                value={props.label}
            />
            <FieldContainer>
                <Select
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={(event)=>{if(props.onChange)props.onChange(event.target.value)}}
                >
                    <option value={""} key={100+"key"}>Choose here</option>
                    {props.dropdownOptions.map((option, i) =>(
                            <option value={option} key={i+option+"key"}>{option}</option>
                        ))}
                </Select>
            </FieldContainer>

        </Container>
    )
}

let Container = styled.div`
    width: 300px;
`;

let FieldContainer = styled.div`
    background-color: ${COLORS.lightGrey};
    max-width: 300px;
    border-radius: 10px;
    padding: 10px 20px;
`;

let Select = styled.select`
    width: 100%;
    font-size: 16px;    
    color: ${COLORS.grey};
    border-style: none;
    padding-left: 10px;
    &:focus {
        outline: 0;
    }
`;

let Text = styled.p`
    font-size: 16px;
    color: ${COLORS.black};
    font-weight: 400;
    margin-bottom: 5px;
`;

export default DropdownField;