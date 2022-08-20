import styled from 'styled-components';
import { COLORS, DEVICE } from '../utils/constants';

const Button = styled.button`
  height: 100%;
  width: auto;
  aspect-ratio: 1/1;
  border: none;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS['menu-button-hover']};
  }

  @media ${DEVICE.tablet} {
    display: none;
  }
`;

export const MenuButton = (props) => {
  const handleClick = () => {
    props.handleclick();
  };

  return (
    <Button onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill={`${COLORS.primary}`} d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
    </Button>
  );
};
