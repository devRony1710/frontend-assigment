import React from 'react';

import { HeaderSearcher, SearcherInput, SearcherIcon } from './style';

//icons
import { FaSistrix } from 'react-icons/fa';

export const SearcherContainer = () => {
  return (
    <HeaderSearcher>
      <SearcherIcon>
        <a href="/">
          <FaSistrix />
        </a>
      </SearcherIcon>
      <SearcherInput placeholder="Qué estás buscando?"></SearcherInput>
    </HeaderSearcher>
  );
};
