import React, { FC } from 'react';
import styled from 'styled-components'
import { COLORS } from '../../constants/colors';
import MainCard from '../cards/MainCard'

interface PageInterface {
    navigate: Function;
}

let Main:FC<PageInterface> = (props) => {
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
                    onClick={()=>props.navigate("addFact")}
                />
                <MainCard
                    imageUrl='images/diagnosis.png'
                    cardTitle='Diagonsis'
                    cardPoints={['Covid Status Report']}
                    color={COLORS.blue}
                    onClick={()=>props.navigate("diagnosis")}
                />
                <MainCard
                    imageUrl='images/statistics.png'
                    cardTitle='Statistics'
                    cardPoints={['Infection Count', 'Condition Stats', 'Symptom Stats', 'More']}
                    color={COLORS.purple}
                    onClick={()=>props.navigate("stats")}
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