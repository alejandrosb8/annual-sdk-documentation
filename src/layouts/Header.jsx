import React from 'react';
import styled from 'styled-components';
import { MenuButton } from '../components/MenuButton';
import { COLORS } from '../utils/constants';

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${COLORS.secondary};
  box-shadow: #707070 0px 0px 12px 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 15;
  position: fixed;
`;

const Title = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 10px;
  font-size: 2.6rem;
  font-weight: 700;
  color: ${COLORS.primary};
`;

export const Header = (props) => {
  return (
    <StyledHeader>
      <MenuButton handleclick={props.handleclick} />
      <Title>Annual SDK</Title>
    </StyledHeader>
  );
};
