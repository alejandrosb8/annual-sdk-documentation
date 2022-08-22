import React from 'react';
import styled from 'styled-components';
import { ColorText } from '../components/StyledText';
import { Installation } from '../sections/Installation';
import { OutputSOAP } from '../sections/OutputSOAP';
import { StatusCode } from '../sections/StatusCode';
import { ServicesSection } from '../sections/ServicesSection';
import { DEVICE, COLORS } from '../utils/constants';

const StyledMain = styled.main`
  padding: 30px;

  @media ${DEVICE.tablet} {
    margin-left: ${(props) => props.sizeNav};
  }
`;

const StyledTitle = styled.h1`
  font-size: 3.4rem;
  font-weight: 700;
  color: ${COLORS.secondary};
  margin-top: 60px;
`;

export const MainContent = (props) => {
  return (
    <StyledMain sizeNav={props.sizeNav}>
      <StyledTitle>
        {`Documentación de la herramienta`} <ColorText color={COLORS.accent}>Annual SDK</ColorText>
      </StyledTitle>
      <Installation />
      <OutputSOAP />
      <StatusCode />
      <ServicesSection />
    </StyledMain>
  );
};
