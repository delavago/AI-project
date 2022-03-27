import React, { FC } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

interface MainCardInterface {
    imageUrl: string;
    cardTitle: string;
    cardPoints: Array<string>;
    color: string;
    onClick: Function;
}

let MainCard: FC<MainCardInterface> = (props) => {
    return (
        <Container
            onClick={()=>props.onClick()}
        >
            <div style={{
                flex: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image
                    src={props.imageUrl}
                />
            </div>
            <CardBodyContainer style={{
                backgroundColor: props.color
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text>{props.cardTitle}</Text>
                </div>
                <div>
                    <ul>
                        {props.cardPoints.map((item: string, index: number) => (
                            <LI key={props.cardTitle + "_" + index}>{item}</LI>
                        ))}
                    </ul>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image
                        src={'images/arrow-right.svg'}
                        style={{width: 30, height: 30}}
                    />
                </div>
            </CardBodyContainer>
        </Container>
    )
}

let Container = styled.div`
    border-radius: 10px;
    min-width: 250px;
    max-width: 300px;
    height: 400px;
    overflow: hidden;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    @media only screen and (min-width: 1024px) {
        margin-left: 10px;
        margin-right: 10px;
    }
    &:hover{
        cursor: pointer;
    }
`;

let CardBodyContainer = styled.div`
    flex: 4;
    padding: 20;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
`;

let Text = styled.p`
    font-size: 24px;
    color: #fff;
    font-weight: 400;
    margin-bottom: 15px;
    margin: 0;
`;

let LI = styled.li`
    font-size: 16px;
    color: #fff;
    font-weight: 400;
    margin-bottom: 15px;
    margin: 0;
`;

let Image = styled.img`

`;

export default MainCard;