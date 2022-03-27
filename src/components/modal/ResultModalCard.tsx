import React, { FC } from 'react';
import styled from 'styled-components'
import { COLORS } from '../../constants/colors';
import Button from '../buttons/button';
import Label from '../text/label';

interface ResultModalCardInterface {
    name: string;
    age: number;
    gender: string
    status: string;
    closeModal: Function
}

let ResultModalCard:FC<ResultModalCardInterface> = (props) => {
    return (
        <Container>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 300,
                    marginBottom: 20
                }}
            >
                <div>
                    <Text>Results</Text>
                </div>
            </div>
            <div style={{marginBottom: 20}}>
                <div>
                    <Label
                        value="Name"
                        textStyles={{ marginBottom: 0, color: COLORS.grey }}
                    />
                    <DataText>Delano Bailey</DataText>
                </div>
                <div>
                    <Label
                        value="Age"
                        textStyles={{ marginBottom: 0, color: COLORS.grey }}
                    />
                    <DataText>23</DataText>
                </div>
                <div>
                    <Label
                        value="Gender"
                        textStyles={{ marginBottom: 0, color: COLORS.grey }}
                    />
                    <DataText>Male</DataText>
                </div>
                <div>
                    <Label
                        value="Covid Diagnosis"
                        textStyles={{ marginBottom: 0, color: COLORS.grey }}
                    />
                    <DataText>Covid Free</DataText>
                </div> 
            </div>
            <Button
                value="Done"
                containerStyling={{ backgroundColor: COLORS.blue, width: '100%' }}
            />
        </Container>
    )
}
let Container = styled.div`
    background-color: #fff;
    border-radius: 10px;
    width: 300px;
    padding: 15px;
`;

let Text = styled.p`
    font-size: 24px;
    color: ${COLORS.black};
    font-weight: 400;
    padding: 0
`;

let DataText = styled.p`
    font-size: 18px;
    color: ${COLORS.black};
    font-weight: 400;
    padding: 0
`;

let Image = styled.img`

`;

export default ResultModalCard;