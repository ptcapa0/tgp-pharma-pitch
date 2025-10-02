import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { opexSavings } from '../data';

const OverlayBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`;

const OverlayContent = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background: #fff;
  border-radius: 16px 16px 0 0;
  z-index: 1002;
  box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
  padding: 1rem;
  box-sizing: border-box;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #eee;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
`;

const SectionTitle = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const SynergyCard = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SynergyCategory = styled.span`
  font-weight: 500;
`;

const SynergyValue = styled.span`
  font-weight: bold;
  color: #0d6efd;
`;

const Details = styled.details`
  margin-bottom: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
`;

const Summary = styled.summary`
  font-weight: bold;
  cursor: pointer;
`;

const DataRoomOverlay = ({ onClose }) => {
  return (
    <>
      <OverlayBackdrop
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <OverlayContent
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h1>Data Room</h1>
        
        <SectionTitle>Opex Synergy Savings (5-Year Total)</SectionTitle>
        {opexSavings.map(item => (
          <SynergyCard key={item.category}>
            <SynergyCategory>{item.category}</SynergyCategory>
            <SynergyValue>{item.savings}</SynergyValue>
          </SynergyCard>
        ))}

        <SectionTitle>100-Day Integration Plan (Detail)</SectionTitle>
        <Details>
          <Summary>Phase 1: Governance & Alignment (Weeks 1-4)</Summary>
          <ul>
            <li>Establish Governance Model, KPIs, and reporting rhythm.</li>
            <li>Finalize legal and administrative integration of new FTEs.</li>
            <li>Conduct joint strategy workshop with commercial leadership.</li>
          </ul>
        </Details>
        <Details>
          <Summary>Phase 2: Execution & Early Wins (Weeks 5-8)</Summary>
           <ul>
            <li>Launch direct entry campaigns in Greece and Malta.</li>
            <li>Begin formal sales activities in the Spanish market.</li>
            <li>Launch structured training program for TGP Portugal team.</li>
          </ul>
        </Details>
        <Details>
          <Summary>Phase 3: Scale & Report (Weeks 9-12)</Summary>
           <ul>
            <li>Secure first purchase orders from new markets.</li>
            <li>Transition primary account responsibility to TGP team.</li>
            <li>Deliver "First 100 Days" report to executive team.</li>
          </ul>
        </Details>

      </OverlayContent>
    </>
  );
};

export default DataRoomOverlay;