import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components'
import { COLORS } from '../../constants/colors';

interface LabelInterface {
    value: string;
    textStyles?: CSSProperties
}
let Label: FC<LabelInterface> = (props) => {
    return (
        <p style={{
            fontSize: 16,
            fontWeight: 400,
            color: COLORS.black,
            marginBottom: 15,
            ...props.textStyles
        }}>
            {props.value}
        </p>
    )
}

export default Label;