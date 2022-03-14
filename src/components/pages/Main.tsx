import React from 'react';
import styled from 'styled-components'
import { COLORS } from '../../constants/colors';
import MainCard from '../cards/MainCard'

let Main = () => {
    return (
        <Container>
            <div 
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Text>Choose an option:</Text>
            </div>
            <CardContainer>
                <MainCard
                    imageUrl='images/addFact.png'
                    cardTitle='Add Fact'
                    cardPoints={['Covid Variant', 'Covid Symptoms', 'Underlying Conditions']}
                    color={COLORS.orange}
                />
                <MainCard
                    imageUrl='images/diagnosis.png'
                    cardTitle='Diagonsis'
                    cardPoints={['Covid Variant', 'Covid Symptoms', 'Underlying Conditions']}
                    color={COLORS.blue}
                />
                <MainCard
                    imageUrl='images/statistics.png'
                    cardTitle='Statistics'
                    cardPoints={['Covid Variant', 'Covid Symptoms', 'Underlying Conditions']}
                    color={COLORS.purple}
                />
            </CardContainer>
        </Container>
    )
}

let Container = styled.div`

`;

let CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: 1024px) {
        justify-content: center;
        flex-direction: row;
    }
`;

let Text = styled.p`
    font-size: 24px;
    color: ${COLORS.black};
    font-weight: 400;
    margin-bottom: 15px;
`;

export default Main;