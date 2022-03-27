import React, { FC } from 'react';
import styled from 'styled-components'
import { COLORS } from '../../constants/colors';

let ModalBackground: FC = (props) => {
    return (
       <Container>
           {props.children}
       </Container> 
    )
}

let Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(9, 8, 9, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default ModalBackground;