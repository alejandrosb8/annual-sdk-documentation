import React from 'react';
import styled from 'styled-components';
import { Installation } from '../sections/Installation';
import { StatusCode } from '../sections/StatusCode';
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
      <StyledTitle>{'Documentación de la herramienta Annual SDK'}</StyledTitle>
      <Installation />
      <StatusCode />
    </StyledMain>
  );
};
