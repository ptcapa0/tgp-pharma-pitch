import React from 'react';
import styled from 'styled-components';
import TGPLogo from '../assets/images/TGP_Logo.svg';
import NewPharmaLogo from '../assets/images/New_Pharma_Logo.svg';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 5%;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  border-bottom: 1px solid #eee;

  @media (min-width: 800px) {
    padding: 1rem calc((100% - 800px) / 2);
  }
`;

const Logo = styled.img`
  height: 30px;
`;

const PlusSign = styled.span`
  font-size: 2rem;
  color: #ccc;
  font-weight: 300;
  margin: 0 1rem;
`;

const LogoGroup = styled.div`
  display: flex;
  align-items: center;
`;


const Header = () => {
  return (
    <HeaderContainer>
      <LogoGroup>
        <Logo src={TGPLogo} alt="TGP Logo" />
        <PlusSign>+</PlusSign>
        <Logo src={NewPharmaLogo} alt="New Pharma Logo" />
      </LogoGroup>
    </HeaderContainer>
  );
};

export default Header;