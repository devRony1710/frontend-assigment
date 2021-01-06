import React from 'react';

import { FaHome } from 'react-icons/fa';
import { RiArrowDownSLine } from 'react-icons/ri';

import { FirstMenuContainer, MenuLink } from './style';

export const FirstMenu = () => {
  return (
    <FirstMenuContainer>
      <FaHome size="18px" color="white" />
      <MenuLink href="/">
        Inicio <RiArrowDownSLine />
      </MenuLink>
    </FirstMenuContainer>
  );
};
