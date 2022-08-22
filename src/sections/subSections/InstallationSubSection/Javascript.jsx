import { SectionSubTitle, StyledSubSection } from '../../../components/SubSectionComponents';
import { SectionCode } from '../../../components/SectionComponents';

import React from 'react';

export const JavascriptSubSection = () => {
  return (
    <StyledSubSection>
      <SectionSubTitle>{'JavaScript (con Node js)'}</SectionSubTitle>
      <SectionCode>
        {`
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
      `}
      </SectionCode>
    </StyledSubSection>
  );
};
