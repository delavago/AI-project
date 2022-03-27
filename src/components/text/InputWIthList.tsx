import React, { CSSProperties, FC, useState } from 'react';
import styled from 'styled-components'
import { COLORS } from '../../constants/colors';
import Button from '../buttons/button';
import TextInputField from './textInputField';
interface FieldInterface {
    label: string;
    placeholder: string;
    buttonLabel: string;
    list: Array<string>;
    onChange?: Function;
    containerStyling?: CSSProperties;
}

let InputWithList: FC<FieldInterface> = (props) => {

    let [fieldValue, setFieldValue] = useState("")

    return (
        <Container style={props.containerStyling}>
            <TextInputField
                label={props.label}
                placeholder={props.placeholder}
                onChange={setFieldValue}
                containerStyling={{marginBottom: 15}}
            />
            <Button
                value={props.buttonLabel}
                containerStyling={{width: '100%', backgroundColor: COLORS.blue}}
                onClick={()=>{
                    if(props.onChange) props.onChange(fieldValue)
                    setFieldValue("")
                }}
            />
            <ul>
                {props.list.map((item, index) =>(
                    <Li key={'list_item_'+item+index}>
                        {item}
                    </Li>
                ))}
            </ul>
        </Container>
    )
}

let Container = styled.div`
    max-width: 300px;
`;

let Li = styled.li`
    font-size: 18px;
    color: ${COLORS.black};
    font-weight: 400;
    margin-bottom: 15px;
`;

export default InputWithList