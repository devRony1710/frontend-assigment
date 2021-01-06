import React from 'react';

import { HeaderSearcher, SearcherInput, SearcherIcon } from './style';

//icons
import { FaSistrix } from 'react-icons/fa';

export const SearcherContainer = () => {
  return (
    <HeaderSearcher>
      <SearcherIcon>
        <FaSistrix size="25px" />
      </SearcherIcon>
      <SearcherInput></SearcherInput>
    </HeaderSearcher>
  );
};
