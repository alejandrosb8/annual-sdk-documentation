import React from 'react';
import styled from 'styled-components';
import { COLORS, DEVICE } from '../utils/constants';

const MainLayout = styled.div`
  position: fixed;
  height: 100%;
  width: ${(props) => props.size};
  background-color: ${COLORS['nav-bg']};
  z-index: 10;
  box-shadow: #707070 0px 0px 12px 0px;
  left: ${(props) => (props.active ? '0' : '-100%')};
  transition: left 0.35s ease-out;

  @media ${DEVICE.tablet} {
    left: 0;
  }
`;

const StyledNav = styled.nav`
  width: 100%;
  height: 100%;
  margin-top: 60px;
`;
const StyledUl = styled.ul`
  list-style: none;
  overflow-y: auto;
  padding: 20px;
`;

const StyledLi = styled.li`
  margin-top: 10px;
  width: 100%;
`;

const StyledAnchor = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${COLORS.secondary};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${COLORS.accent};
  }
`;

const idArray = [];

const titlesArray = Array.from(document.getElementsByTagName('h2'));
titlesArray.forEach((element, index) => {
  const newId = `title-id-${index}`;
  element.id = newId;
  idArray.push(newId);
});

export const NavMenu = (props) => {
  return (
    <MainLayout size={props.size} active={props.active}>
      <StyledNav>
        <StyledUl>
          {idArray.map((x) => {
            return (
              <StyledLi>
                <StyledAnchor href={`#${x}`}>{document.getElementById(x).textContent}</StyledAnchor>
              </StyledLi>
            );
          })}
        </StyledUl>
      </StyledNav>
    </MainLayout>
  );
};
