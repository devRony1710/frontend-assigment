import React from 'react';

// components
import { HeaderImg } from './ImgComponent/index';
import { SearcherContainer } from './Searcher/index';

// styles
import { HeaderContainer } from './style';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImg />
      <SearcherContainer />
    </HeaderContainer>
  );
};
