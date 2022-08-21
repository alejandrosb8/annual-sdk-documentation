import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS, DEVICE } from '../utils/constants';

const fixedHeight = '200px';

const MainLayout = styled.div`
  position: fixed;
  height: calc(100% + ${fixedHeight});
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
  margin-bottom: ${fixedHeight};
`;
const StyledUl = styled.ul`
  list-style: none;
  overflow-y: auto;
  padding: 20px;
  overflow-x: hidden;
`;

const StyledSubUl = styled.ul`
  list-style: none;
  margin-left: 10px;
  margin-bottom: 20px;
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
  word-break: normal;

  &:hover {
    color: ${COLORS.accent};
  }
`;

export const NavMenu = (props) => {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    const idArray = [];
    const titlesArray = Array.from(document.getElementsByTagName('section'));
    titlesArray.forEach((element, index) => {
      const newId = `title-id-${index}`;
      element.id = newId;
      idArray.push(newId);
    });
    const subTitles = Array.from(document.querySelectorAll(`h3`));
    subTitles.forEach((subtitle, newIndex) => {
      const newSubId = `subtitle-id-${newIndex}`;
      subtitle.id = newSubId;
    });
    setIds(idArray);
  }, []);

  //No juzguen el codigo de abajo, despues lo hago más bonito XD

  return (
    <MainLayout size={props.size} active={props.active}>
      <StyledNav>
        <StyledUl>
          {ids.map((x) => {
            const subTitles = Array.from(document.querySelectorAll(`#${x} > div > h3`));
            return (
              <StyledLi key={x}>
                <StyledAnchor href={`#${x}`}>{Array.from(document.querySelectorAll(`#${x} > h2`))[0].textContent}</StyledAnchor>
                {subTitles.length > 0 && (
                  <StyledSubUl>
                    {subTitles.map((y, index) => {
                      return (
                        <StyledLi key={index}>
                          <StyledAnchor href={`#${y.id}`}>{y.textContent}</StyledAnchor>
                        </StyledLi>
                      );
                    })}
                  </StyledSubUl>
                )}
              </StyledLi>
            );
          })}
        </StyledUl>
      </StyledNav>
    </MainLayout>
  );
};
