import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Import Components with .jsx extension for clarity
import Header from './components/Header.jsx';
import ExecutiveLanding from './components/ExecutiveLanding.jsx';
import StrategicNarrative from './components/StrategicNarrative.jsx';
import DataRoomOverlay from './components/DataRoomOverlay.jsx';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
`;

function App() {
  const [isDataRoomOpen, setIsDataRoomOpen] = useState(false);

  return (
    <>
      <Header />
      <AppContainer>
        <ExecutiveLanding />
        <StrategicNarrative onOpenDataRoom={() => setIsDataRoomOpen(true)} />
      </AppContainer>
      <AnimatePresence>
        {isDataRoomOpen && (
          <DataRoomOverlay onClose={() => setIsDataRoomOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;