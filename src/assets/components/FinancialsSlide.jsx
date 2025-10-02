import React, { useState } from 'react';
import styled from 'styled-components';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { financialData, cashFlowData } from '../data';

const Section = styled.section`
  padding: 4rem 1rem;
  background-color: #f8f9fa;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #495057;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const CaseButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  background-color: ${({ active }) => (active ? '#0d6efd' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  cursor: pointer;
  &:first-child { border-radius: 8px 0 0 8px; }
  &:last-child { border-radius: 0 8px 8px 0; }
  &:not(:last-child) { border-right: none; }
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 4rem;
`;

const FinancialsSlide = () => {
  const [activeCase, setActiveCase] = useState('Synergies+');
  const cases = ['Base Case', 'Synergies', 'Synergies+'];

  return (
    <Section>
      <Title>The Financial Case</Title>
      <Subtitle>Interactive Projections</Subtitle>

      <ButtonGroup>
        {cases.map(c => (
          <CaseButton 
            key={c} 
            active={activeCase === c} 
            onClick={() => setActiveCase(c)}
          >
            {c}
          </CaseButton>
        ))}
      </ButtonGroup>

      <Subtitle>EBITDA (in thousands €)</Subtitle>
      <ChartContainer>
        <ResponsiveContainer>
          <BarChart data={financialData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            {cases.map((c, index) => (
              <Bar key={c} dataKey={c} fill={c === activeCase ? '#0d6efd' : '#ccc'} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <Subtitle>Cumulative Cash Flow (in thousands €)</Subtitle>
      <ChartContainer>
        <ResponsiveContainer>
          <LineChart data={cashFlowData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            {cases.map((c, index) => (
              <Line key={c} type="monotone" dataKey={c} stroke={c === activeCase ? '#0d6efd' : '#ccc'} strokeWidth={3} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Section>
  );
};

export default FinancialsSlide;