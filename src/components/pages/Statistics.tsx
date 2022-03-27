import React, { FC, useState } from 'react';
import styled from 'styled-components'
import { COLORS } from '../../constants/colors';
import PercentageField from '../text/percentageField';

interface PageInterface {
    onPressBack: Function;
}

let Statistics:FC<PageInterface> = (props) => {
    return (
        <Container>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: 300,
                    marginBottom: 20
                }}
            >
                <Image
                    src={'/images/arrow-left.svg'}
                    style={{ marginRight: 20, cursor: 'pointer' }}
                    onClick={()=>props.onPressBack()}
                />
                <div>
                    <Text>Statistics</Text>
                </div>
            </div>

            <ContentContainer>
                <PercentageField
                    label="People with mild symptoms"
                    percentage={1}
                    containerStyling={{ marginBottom: 20 }}
                />
                <PercentageField
                    label="People with severe symptoms"
                    percentage={1}
                    containerStyling={{ marginBottom: 20 }}
                />
                <PercentageField
                    label="People with Delta Variant"
                    percentage={1}
                    containerStyling={{ marginBottom: 20 }}
                />
                <PercentageField
                    label="People with Omicron Variant"
                    percentage={1}
                    containerStyling={{ marginBottom: 20 }}
                />
                <PercentageField
                    label="People with Omicron variant
                    and Underlying symptoms"
                    percentage={1}
                    containerStyling={{ marginBottom: 20 }}
                />
            </ContentContainer>
        </Container>
    )
}

let Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

let ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    /* align-items: center;
    @media only screen and (min-width: 1024px) {
        justify-content: center;
        flex-direction: row;
    } */
`;


let Text = styled.p`
    font-size: 24px;
    color: ${COLORS.black};
    font-weight: 400;
    padding: 0
`;

let Image = styled.img`

`;

export default Statistics;