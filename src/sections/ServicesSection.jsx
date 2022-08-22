import React from 'react';
import { StyledSection, SectionTitle, SectionP } from '../components/SectionComponents';
import { SEG_LoginSaintSection } from './subSections/ServicesSection/SEG_LoginSaint';

export const ServicesSection = () => {
  return (
    <StyledSection>
      <SectionTitle>{'Guia de los servicios'}</SectionTitle>
      <SectionP>{'A continuación se mostraran los siguientes servicios con su input correspondiente.'}</SectionP>
      <SEG_LoginSaintSection />
    </StyledSection>
  );
};
