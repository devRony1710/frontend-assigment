import React from 'react';

import { MainSection } from './MainSection/index';
import { SideBar } from './SideBar/index.js';

import { MainContainer } from './style';

export const Main = () => {
  return (
    <MainContainer>
      <MainSection />
      <SideBar />
    </MainContainer>
  );
};
