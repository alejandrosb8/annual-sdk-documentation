import React from 'react';
import { StyledSection, SectionTitle, SectionP, SectionSubTitle, SectionCode } from '../components/SectionComponents';

export const OutputSOAP = () => {
  return (
    <StyledSection>
      <SectionTitle>{'¿Como es el output que regresan los servicios?'}</SectionTitle>
      <SectionP>{'Los servicios regresan un output general, devuelven un objeto JSON con los siguientes elementos:'}</SectionP>
      <SectionCode>
        {`
          {
            "Status": <int>,
            "Message": <string>,
            "Data": {
              "Id": <int>,
              "Perfil": <int>
            }
          }
        `}
      </SectionCode>
    </StyledSection>
  );
};
