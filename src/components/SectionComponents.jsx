import styled from 'styled-components';
import { COLORS } from '../utils/constants';

export const StyledSection = styled.section`
  padding: 5px;
  margin-top: 40px;
  margin-bottom: 20px;
  max-width: 1000px;
  margin-left: 10px;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: ${COLORS.secondary};
`;

export const SectionSubTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${COLORS.secondary};
  margin-top: 40px;
`;

export const SectionP = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${COLORS.secondary};
  margin-top: 20px;
`;

export const SectionCode = styled.pre`
  font-size: 1.6rem;
  font-weight: 500;
  background-color: ${COLORS['nav-bg']};
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  line-height: 2.2rem;
  overflow-x: auto;
  color: black;
  border-radius: 6px;
`;

export const SectionUl = styled.ul`
  list-style: none;
  margin-left: 10px;
  margin-top: 20px;
`;

export const SectionLi = styled.li`
  font-size: 2rem;
  font-weight: 500;
  color: ${COLORS.secondary};
  margin-top: 10px;
`;
