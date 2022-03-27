import React, { FC, useState } from 'react';
import styled from 'styled-components'
import { COLORS } from '../../constants/colors';
import Button from '../buttons/button';
import ModalBackground from '../modal/modalBackground';
import ResultModalCard from '../modal/ResultModalCard';
import DropdownField from '../text/dropdown';
import InputWithList from '../text/InputWIthList';
import Label from '../text/label';
import TextInputField from '../text/textInputField';

interface PageInterface {
    onPressBack: Function;
}

let AddFact:FC<PageInterface> = (props) => {

    let [variantName, setVariantName] = useState("");
    let [symptoms, setSymptoms] = useState<Array<string>>([]);
    let [underlyingIllnesses, setUnderlyingIllnesses] = useState<Array<string>>([])

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
                    <Text>Add Fact</Text>
                </div>
            </div>
            <ContentContainer>
                <DropdownField
                    dropdownOptions={["Regular", "Omnicron", "Delta"]}
                    label="Variant Name"
                    onChange={setVariantName}
                    containerStyling={{ marginBottom: 20 }}
                />

                <InputWithList
                    label="Enter Symptom"
                    placeholder="Enter Symptom"
                    buttonLabel='Add Symptom'
                    list={symptoms}
                    onChange={(val: string)=> setSymptoms([...symptoms,val])}
                    containerStyling={{ marginBottom: 20 }}
                />

                <InputWithList
                    label="Underlying Illnesses"
                    placeholder="Enter Underlying Illnesses"
                    buttonLabel='Add Illness'
                    list={underlyingIllnesses}
                    onChange={(val: string)=>setUnderlyingIllnesses([...underlyingIllnesses, val])}
                    containerStyling={{ marginBottom: 20 }}
                />

                <Button
                    value="Done"
                    containerStyling={{ backgroundColor: COLORS.green }}
                />
            </ContentContainer>
            {/* <ModalBackground>
                <ResultModalCard/>
            </ModalBackground> */}
        </Container>
    );
}

let Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: relative;
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

export default AddFact;