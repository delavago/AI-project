import React, { useState } from 'react';
import styled from 'styled-components'

//pages import 
import Main from './components/pages/Main'
import AddFact from './components/pages/AddFact';
import Diagnsis from './components/pages/Diagnosis';
import Statistics from './components/pages/Statistics';

function App() {

  let [currentScreen, setCurrentScreen] = useState("main")

  let onPressBack = () => {
    setCurrentScreen("main");
  }

  return (
    <PageContainer>
        {currentScreen==="main"&&<Main
          navigate={(val:string)=>setCurrentScreen(val)}
        />}
        {currentScreen==="addFact"&&<AddFact
          onPressBack={onPressBack}
        />}
        {currentScreen==="diagnosis"&&<Diagnsis
          onPressBack={onPressBack}
        />}
        {currentScreen==="stats"&&<Statistics
          onPressBack={onPressBack}
        />}
    </PageContainer>
  );
}

let PageContainer = styled.div`

`;

export default App;
