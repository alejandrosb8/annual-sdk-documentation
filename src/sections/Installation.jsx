import React from 'react';
import { StyledSection, SectionTitle, SectionP } from '../components/SectionComponents';
import { JavascriptSubSection } from './subSections/InstallationSubSection/Javascript';

export const Installation = () => {
  return (
    <StyledSection>
      <SectionTitle>{'¿Como consumir los servicios?'}</SectionTitle>
      <SectionP>
        {'A continuación se dará una demostración de como consumir los servicios SOAP por medio de diferentes lenguajes:'}
      </SectionP>
      <JavascriptSubSection />
    </StyledSection>
  );
};
