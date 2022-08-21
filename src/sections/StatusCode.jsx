import React from 'react';
import { StyledSection, SectionTitle, SectionP, SectionUl, SectionLi } from '../components/SectionComponents';
import { StatusCodesTableContainer, StatusCodesTableTitle, StatusCodesTableElement } from '../components/SpecificComponents';

export const StatusCode = () => {
  return (
    <StyledSection>
      <SectionTitle>{'Codigos de Estado'}</SectionTitle>
      <SectionP>{'Estos son algunos codigos de estado que pueden devolver los servicios:'}</SectionP>
      <StatusCodesTableContainer>
        <StatusCodesTableTitle>{'Status'}</StatusCodesTableTitle>
        <StatusCodesTableTitle>{'Message'}</StatusCodesTableTitle>
        <StatusCodesTableElement>{'0'}</StatusCodesTableElement>
        <StatusCodesTableElement>{'Operacion exitosa'}</StatusCodesTableElement>
        <StatusCodesTableElement>{'-101'}</StatusCodesTableElement>
        <StatusCodesTableElement>{'Usuario no autentificado'}</StatusCodesTableElement>
      </StatusCodesTableContainer>
    </StyledSection>
  );
};
