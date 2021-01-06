import React from 'react';
import { FirstMenu } from './FirstMenu';

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
      <FirstMenu />
    </HeaderContainer>
  );
};
