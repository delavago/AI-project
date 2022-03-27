import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components'
import { COLORS } from '../../constants/colors';
import Label from './label';
interface FieldInterface {
    label: string;
    percentage: number;
    containerStyling?: CSSProperties
}

let PercentageField:FC<FieldInterface> = (props) => {
    return (
        <Container style={{...props.containerStyling}}>
            <Label
                value={`${props.label}: (${props.percentage*100}%)`}
            />
            <div style={{
                width: '100%',
                height: 5,
                borderRadius: 10,
                backgroundColor: COLORS.grey
            }}>
                <div
                    style={{
                        height: '100%',
                        width: `${props.percentage*100}%`,
                        backgroundColor: COLORS.green,
                        borderRadius: 10
                    }}
                />
            </div>
        </Container>
    )
}

let Container = styled.div`
    max-width: 300px;
`;


export default PercentageField;