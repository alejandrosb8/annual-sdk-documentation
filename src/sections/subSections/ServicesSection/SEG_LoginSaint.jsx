import { SectionSubTitle, StyledSubSection } from '../../../components/SubSectionComponents';
import { SectionP, SectionCode } from '../../../components/SectionComponents';

import React from 'react';

export const SEG_LoginSaintSection = () => {
  return (
    <StyledSubSection>
      <SectionSubTitle>{'SEG_LoginSaint'}</SectionSubTitle>
      <SectionP>
        {'Este servicio pide un usuario y contraseña para devolver un token, que sirve como autentificación para los demas servicios'}
      </SectionP>
      <SectionP>{'El input es:'}</SectionP>
      <SectionCode>
        {`
            {
                idUser: <string>,
                password: <string>
            }
          `}
      </SectionCode>
    </StyledSubSection>
  );
};
