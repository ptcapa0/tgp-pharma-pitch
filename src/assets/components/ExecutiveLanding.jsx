import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { executiveBrief } from '../data';
import EUFlag from '../assets/icons/Icon_EU_Flag.svg';
import Team from '../assets/icons/Icon_Team.svg';
import GraphUp from '../assets/icons/Icon_Graph_Up.svg';

const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  color: #6c757d;
  margin-bottom: 0.5rem;
`;

const Author = styled.p`
  text-align: center;
  color: #adb5bd;
  margin-bottom: 3rem;
`;

const CardContainer = styled.div`
  margin-top: 3rem;
`;

const CardStyled = styled(motion.div)`
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  padding: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  overflow: hidden;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const CardSummary = styled.p`
  color: #495057;
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

const FullText = styled(motion.div)`
  margin-top: 1rem;
  color: #343a40;
  white-space: pre-wrap;
  line-height: 1.6;
`;

const InfoCard = ({ icon, title, summary, fullText }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CardStyled layout onClick={() => setIsOpen(!isOpen)}>
      <motion.div layout>
        <CardHeader>
          <Icon src={icon} />
          <div>
            <CardTitle>{title}</CardTitle>
            {!isOpen && <CardSummary>{summary}</CardSummary>}
          </div>
        </CardHeader>
        <AnimatePresence>
          {isOpen && (
            <FullText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {fullText}
            </FullText>
          )}
        </AnimatePresence>
      </motion.div>
    </CardStyled>
  );
};


const ExecutiveLanding = () => {
  return (
    <Section>
      <Title>A Strategic Conversation</Title>
      <Subtitle>For TGP Leadership</Subtitle>
      <Author>From: PTC - Founder, 'New Pharma'</Author>
      
      <CardContainer>
        <InfoCard icon={EUFlag} {...executiveBrief.opportunity} />
        <InfoCard icon={Team} {...executiveBrief.solution} />
        <InfoCard icon={GraphUp} {...executiveBrief.financials} />
      </CardContainer>
    </Section>
  );
};

export default ExecutiveLanding;