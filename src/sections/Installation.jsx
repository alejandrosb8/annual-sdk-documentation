import React from 'react';
import { StyledSection, SectionTitle, SectionP, SectionSubTitle, SectionCode } from '../components/SectionComponents';

export const Installation = () => {
  return (
    <StyledSection>
      <SectionTitle>{'¿Como consumir los servicios?'}</SectionTitle>
      <SectionP>
        {'A continuación se dará una demostración de como consumir los servicios SOAP por medio de diferentes lenguajes:'}
      </SectionP>
      <SectionSubTitle>{'JavaScript (con Node js)'}</SectionSubTitle>
      <SectionCode>{`
        const soap = require('soap');
        const url = 'http://64.135.103.209:49152/SaintAdminServer?wsdl';
        
        const getToken = async (req, res) => {
          try {
            const { idUser, password } = req.body;
            const client = await soap.createClientAsync(url);
            const data = await client.SEG_LoginSaintAsync({ idUser, password });
            res.json(JSON.parse(data[0].SEG_LoginSaintResult));
          } catch (error) {
            res.status(500);
            console.log(error);
          }
        };
        
        export { getToken };
      `}</SectionCode>
    </StyledSection>
  );
};
