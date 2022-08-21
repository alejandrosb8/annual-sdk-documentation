import styled from 'styled-components';
import { COLORS } from '../utils/constants';

export const StatusCodesTableContainer = styled.div`
  background-color: ${COLORS['nav-bg']};
  width: auto;
  max-width: 600px;
  margin-top: 20px;
  overflow-x: auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 20px;
  place-items: center;
  border-radius: 6px;
  gap: 10px;
`;

export const StatusCodesTableTitle = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: black;
  border-bottom: 2px solid ${COLORS.accent};
  width: 80%;
  text-align: center;
`;

export const StatusCodesTableElement = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${COLORS.secondary};
`;
