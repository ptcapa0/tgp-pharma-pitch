import React from 'react';
import styled from 'styled-components';
import FinancialsSlide from './FinancialsSlide'; // We will create this next
import EuropeMap from '../assets/images/Europe_Map.svg';
import AcquiHire from '../assets/images/Diagram_Acqui_Hire.svg';
import Timeline from '../assets/images/Timeline_100_Day.svg';

const Section = styled.section`
  padding: 4rem 1rem;
  text-align: center;
  border-top: 1px solid #e9ecef;
`;

const Slide = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;

const SlideTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SlideText = styled.p`
  font-size: 1.2rem;
  color: #495057;
  max-width: 600px;
`;

const MapBackground = styled(Slide)`
  background-image: url(${EuropeMap});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Diagram = styled.img`
  width: 100%;
  max-width: 500px;
  margin-top: 2rem;
`;

const Button = styled.button`
  font-size: 1.1rem;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  margin: 0.5rem;
  transition: all 0.2s ease;
`;

const PrimaryButton = styled(Button)`
  background-color: #0d6efd;
  color: white;
  &:hover { background-color: #0b5ed7; }
`;

const SecondaryButton = styled(Button)`
  background-color: #e9ecef;
  color: #212529;
  &:hover { background-color: #ced4da; }
`;


const StrategicNarrative = ({ onOpenDataRoom }) => {
  return (
    <>
      <Section>
        <MapBackground>
          <SlideTitle>A Structural Market Shift</SlideTitle>
          <SlideText>100% of EU countries reported shortages in 2023.</SlideText>
          <SlideText>~10 hours/week of pharmacist time lost.</SlideText>
        </MapBackground>

        <Slide>
          <SlideTitle>A Pre-Validated, Lean Execution Unit</SlideTitle>
          <Diagram src={AcquiHire} alt="Acqui-Hire Diagram" />
        </Slide>
      </Section>
      
      <FinancialsSlide />

      <Section>
        <Slide>
          <SlideTitle>The 100-Day Plan: Governance First</SlideTitle>
          <Diagram src={Timeline} alt="100-Day Plan Timeline" />
        </Slide>

        <Slide>
          <SlideTitle>Do you believe this is the right strategic move for TGP?</SlideTitle>
          <div>
            <PrimaryButton>Let's Discuss Next Steps</PrimaryButton>
            <SecondaryButton onClick={onOpenDataRoom}>Review Supporting Data</SecondaryButton>
          </div>
        </Slide>
      </Section>
    </>
  );
};

export default StrategicNarrative;