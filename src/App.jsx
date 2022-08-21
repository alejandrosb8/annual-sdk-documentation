import React from 'react';
import styled from 'styled-components';
import { Header } from './layouts/Header';
import { NavMenu } from './layouts/NavMenu';
import { useState } from 'react';
import { MainContent } from './layouts/MainContent';

const StyledContent = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
`;

const navSize = '260px';

function App() {
  const [navActive, setNavActive] = useState(false);

  const handleClickMenu = () => {
    setNavActive(!navActive);
  };

  return (
    <div>
      <Header handleclick={handleClickMenu} />
      <StyledContent>
        <NavMenu size={navSize} active={navActive} />
        <MainContent sizeNav={navSize} />
      </StyledContent>
    </div>
  );
}

export default App;
