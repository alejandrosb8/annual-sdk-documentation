import React from 'react';
import { StyledSection, SectionTitle, SectionP, SectionUl, SectionLi } from '../components/SectionComponents';

export const StatusCode = () => {
  return (
    <StyledSection>
      <SectionTitle>{'Codigos de Estado'}</SectionTitle>
      <SectionP>{'Estos son algunos codigos de estado que pueden devolver los servicios:'}</SectionP>
      <SectionUl>
        <SectionLi>{'Status 0: Peticion exitosa'}</SectionLi>
        <SectionLi>{'Status -101: Usuario no identificado'}</SectionLi>
      </SectionUl>
    </StyledSection>
  );
};
